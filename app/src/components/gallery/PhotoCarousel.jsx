import { useEffect, useEffectEvent, useRef } from 'react'
import { UI_TEXT } from '../../i18n/translations.js'
import useLanguage from '../../i18n/useLanguage.js'
import { formatText } from '../../utils/format.js'
import { getScrollBehavior } from '../../utils/motion.js'
import CarouselNavButton from './CarouselNavButton.jsx'
import PhotoTile from './PhotoTile.jsx'

/**
 * Swipeable photo strip built on native CSS scroll-snap, so touch swiping,
 * momentum and RTL all come from the browser.
 *
 * Controlled: the parent owns `activeIndex`. Swiping reports the new index
 * through `onIndexChange`; changing `activeIndex` from outside scrolls to it.
 */
export default function PhotoCarousel({ photos, activeIndex, onIndexChange, onOpen, className = '' }) {
  const { t } = useLanguage()
  const slideRefs = useRef([])
  const visibleIndexRef = useRef(activeIndex)
  const total = photos.length
  const hasMultiple = total > 1

  // Effect Event: always calls the latest callback without re-subscribing the observer
  const reportVisibleIndex = useEffectEvent((index) => {
    visibleIndexRef.current = index
    onIndexChange(index)
  })

  // Report which slide the user has swiped to
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return
          reportVisibleIndex(Number(entry.target.dataset.index))
        })
      },
      { threshold: 0.6 },
    )
    slideRefs.current.forEach((slide) => slide && observer.observe(slide))
    return () => observer.disconnect()
  }, [total])

  // Scroll to a slide chosen from outside (arrows, dots, thumbnails, lightbox)
  useEffect(() => {
    if (activeIndex === visibleIndexRef.current) return
    visibleIndexRef.current = activeIndex
    slideRefs.current[activeIndex]?.scrollIntoView({
      behavior: getScrollBehavior(),
      block: 'nearest',
      inline: 'start',
    })
  }, [activeIndex])

  const goTo = (index) => onIndexChange((index + total) % total)

  return (
    <div
      role="region"
      aria-roledescription="carousel"
      aria-label={t(UI_TEXT.photographs)}
      className={`relative overflow-hidden rounded-[20px] border-2 border-gold bg-forest-light ${className}`}
    >
      <ul className="flex size-full snap-x snap-mandatory overflow-x-auto overscroll-x-contain [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        {photos.map((photo, i) => {
          const position = formatText(t(UI_TEXT.photoCounter), { current: i + 1, total })
          return (
            <li
              key={photo.id}
              ref={(node) => {
                slideRefs.current[i] = node
              }}
              data-index={i}
              role="group"
              aria-roledescription="slide"
              aria-label={position}
              className="size-full shrink-0 snap-start snap-always"
            >
              <PhotoTile
                src={photo.url}
                label={`${t(UI_TEXT.openPhoto)}: ${photo.caption || position}`}
                onOpen={() => onOpen(i)}
                className="size-full"
              />
            </li>
          )
        })}
      </ul>

      {hasMultiple && (
        <>
          <span
            dir="ltr"
            className="pointer-events-none absolute end-3 top-3 rounded-full bg-forest/85 px-2.5 py-1 text-xs font-bold text-gold-light"
          >
            {activeIndex + 1} / {total}
          </span>
          {/* Overlay arrows on small screens; larger screens use the side panel */}
          <CarouselNavButton
            direction="previous"
            variant="overlay"
            label={t(UI_TEXT.previousPhoto)}
            onClick={() => goTo(activeIndex - 1)}
            className="absolute start-2.5 top-1/2 -translate-y-1/2 md:hidden"
          />
          <CarouselNavButton
            direction="next"
            variant="overlay"
            label={t(UI_TEXT.nextPhoto)}
            onClick={() => goTo(activeIndex + 1)}
            className="absolute end-2.5 top-1/2 -translate-y-1/2 md:hidden"
          />
        </>
      )}
    </div>
  )
}
