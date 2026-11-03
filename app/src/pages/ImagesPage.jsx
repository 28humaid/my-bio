import { useState } from 'react'
import CarouselDots from '../components/gallery/CarouselDots.jsx'
import CarouselNavButton from '../components/gallery/CarouselNavButton.jsx'
import Lightbox from '../components/gallery/Lightbox.jsx'
import PhotoCarousel from '../components/gallery/PhotoCarousel.jsx'
import ThumbnailList from '../components/gallery/ThumbnailList.jsx'
import { photos } from '../data/biodata.js'
import { UI_TEXT } from '../i18n/translations.js'
import useLanguage from '../i18n/useLanguage.js'
import { getPhotoUrl } from '../utils/assets.js'
import { formatText } from '../utils/format.js'

const photoItems = photos.map((photo) => ({ ...photo, url: getPhotoUrl(photo.file) }))
const photoUrls = photoItems.map((photo) => photo.url)

export default function ImagesPage() {
  const { language, t } = useLanguage()
  const [activeIndex, setActiveIndex] = useState(0)
  const [isLightboxOpen, setIsLightboxOpen] = useState(false)

  const total = photoItems.length
  if (total === 0) {
    return <p className="py-16 text-center text-gold-dark">{t(UI_TEXT.noPhotos)}</p>
  }

  const hasMultiple = total > 1
  const localizedPhotos = photoItems.map((photo) => ({ ...photo, caption: t(photo.caption) }))
  const counterText = formatText(t(UI_TEXT.photoCounter), { current: activeIndex + 1, total })

  const goTo = (index) => setActiveIndex((index + total) % total)
  const step = (delta) => setActiveIndex((current) => (current + delta + total) % total)
  const closeLightbox = () => setIsLightboxOpen(false)
  const openLightbox = (index) => {
    setActiveIndex(index)
    setIsLightboxOpen(true)
  }

  return (
    <section
      aria-label={t(UI_TEXT.photographs)}
      className="flex flex-col gap-3.5 md:flex-row md:items-center md:justify-center md:gap-16"
    >
      {/* Mobile: how to use the carousel, shown above the photo */}
      <p className="text-center text-[13px] text-gold-dark md:hidden">
        {t(hasMultiple ? UI_TEXT.swipeHint : UI_TEXT.tapHint)}
      </p>

      <PhotoCarousel
        photos={localizedPhotos}
        activeIndex={activeIndex}
        onIndexChange={setActiveIndex}
        onOpen={openLightbox}
        // Portrait frame that fits the viewport height on phones
        className="mx-auto aspect-[9/16] w-full max-w-[min(100%,calc(68dvh*9/16))] md:mx-0 md:w-90 md:max-w-none md:shrink-0 md:shadow-[0_18px_40px_rgb(15_61_46/0.2)]"
      />

      {/* Mobile: position dots. Desktop: side panel. */}
      <div className="flex flex-col gap-3 md:w-90 md:gap-5.5">
        {/* Desktop: position and click hint, stacked */}
        <div className="hidden flex-col gap-1 md:flex">
          <p
            aria-hidden="true"
            className={`font-bold text-gold-dark ${
              language === 'en' ? 'text-xs tracking-[0.2em] uppercase' : 'text-sm'
            }`}
          >
            {counterText}
          </p>
          <p className="text-[13px] text-gold-dark">{t(UI_TEXT.clickHint)}</p>
        </div>

        {/* Mobile: position dots */}
        {hasMultiple && (
          <div className="md:hidden">
            <CarouselDots count={total} activeIndex={activeIndex} onSelect={goTo} />
          </div>
        )}

        <div aria-hidden="true" className="hidden h-px bg-gold md:block" />

        {hasMultiple && (
          <div className="hidden flex-col gap-5.5 md:flex">
            <ThumbnailList photos={localizedPhotos} activeIndex={activeIndex} onSelect={goTo} />
            <div className="flex gap-2.5">
              <CarouselNavButton
                direction="previous"
                label={t(UI_TEXT.previousPhoto)}
                onClick={() => step(-1)}
              />
              <CarouselNavButton
                direction="next"
                label={t(UI_TEXT.nextPhoto)}
                onClick={() => step(1)}
              />
            </div>
          </div>
        )}

      </div>

      {isLightboxOpen && (
        <Lightbox
          images={photoUrls}
          index={activeIndex}
          onClose={closeLightbox}
          onNavigate={step}
        />
      )}
    </section>
  )
}
