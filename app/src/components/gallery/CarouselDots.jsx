import { UI_TEXT } from '../../i18n/translations.js'
import useLanguage from '../../i18n/useLanguage.js'
import { formatText } from '../../utils/format.js'

/** Position indicator; the active dot stretches into a pill */
export default function CarouselDots({ count, activeIndex, onSelect }) {
  const { t } = useLanguage()

  return (
    <div className="flex items-center gap-1.5">
      {Array.from({ length: count }, (_, i) => {
        const isActive = i === activeIndex
        return (
          <button
            key={i}
            type="button"
            onClick={() => onSelect(i)}
            aria-label={formatText(t(UI_TEXT.goToPhoto), { current: i + 1 })}
            aria-current={isActive ? 'true' : undefined}
            // 24px hit area around a small visual dot
            className="group grid h-6 cursor-pointer place-items-center focus-visible:outline-2 focus-visible:outline-forest"
          >
            <span
              className={`block h-1.5 rounded-full transition-all duration-300 ${
                isActive ? 'w-5.5 bg-forest' : 'w-1.5 bg-sand group-hover:bg-gold'
              }`}
            />
          </button>
        )
      })}
    </div>
  )
}
