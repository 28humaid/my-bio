import { useEffect, useRef } from 'react'
import { UI_TEXT } from '../../i18n/translations.js'
import useLanguage from '../../i18n/useLanguage.js'
import { ChevronEndIcon, ChevronStartIcon, CloseIcon } from '../common/Icons.jsx'

const controlClass =
  'absolute flex size-11 cursor-pointer items-center justify-center rounded-full border border-gold bg-forest-light text-gold-light ' +
  'focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold-light'

/**
 * Full-screen photo viewer.
 * Keyboard: Esc closes, arrow keys move (mirrored in RTL).
 */
export default function Lightbox({ images, index, onClose, onNavigate }) {
  const { t } = useLanguage()
  const closeButtonRef = useRef(null)
  const hasMultiple = images.length > 1

  // Focus management, scroll lock and keyboard shortcuts while open
  useEffect(() => {
    const previouslyFocused = document.activeElement
    closeButtonRef.current?.focus()

    const isRtl = document.documentElement.dir === 'rtl'
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') onClose()
      if (event.key === 'ArrowRight') onNavigate(isRtl ? -1 : 1)
      if (event.key === 'ArrowLeft') onNavigate(isRtl ? 1 : -1)
    }

    const { overflow } = document.body.style
    document.body.style.overflow = 'hidden'
    document.addEventListener('keydown', handleKeyDown)

    return () => {
      document.body.style.overflow = overflow
      document.removeEventListener('keydown', handleKeyDown)
      previouslyFocused?.focus?.()
    }
  }, [onClose, onNavigate])

  const stop = (event) => event.stopPropagation()

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={t(UI_TEXT.photographs)}
      className="fixed inset-0 z-50 flex items-center justify-center bg-forest/95 p-4"
      onClick={onClose}
    >
      <img
        src={images[index]}
        alt=""
        onClick={stop}
        className="max-h-[85dvh] max-w-full rounded-2xl border-2 border-gold object-contain"
      />

      <button
        ref={closeButtonRef}
        type="button"
        onClick={onClose}
        aria-label={t(UI_TEXT.close)}
        className={`${controlClass} end-4 top-4`}
      >
        <CloseIcon />
      </button>

      {hasMultiple && (
        <>
          <button
            type="button"
            onClick={(event) => {
              stop(event)
              onNavigate(-1)
            }}
            aria-label={t(UI_TEXT.previousPhoto)}
            className={`${controlClass} start-3 top-1/2 -translate-y-1/2`}
          >
            <ChevronStartIcon />
          </button>
          <button
            type="button"
            onClick={(event) => {
              stop(event)
              onNavigate(1)
            }}
            aria-label={t(UI_TEXT.nextPhoto)}
            className={`${controlClass} end-3 top-1/2 -translate-y-1/2`}
          >
            <ChevronEndIcon />
          </button>
          <p dir="ltr" className="absolute inset-x-0 bottom-5 text-center text-sm text-gold-light">
            {index + 1} / {images.length}
          </p>
        </>
      )}
    </div>
  )
}
