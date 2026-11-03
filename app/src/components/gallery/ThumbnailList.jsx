import { UI_TEXT } from '../../i18n/translations.js'
import useLanguage from '../../i18n/useLanguage.js'
import { formatText } from '../../utils/format.js'

/** Small portrait previews used as carousel navigation on larger screens */
export default function ThumbnailList({ photos, activeIndex, onSelect }) {
  const { t } = useLanguage()

  return (
    <ul className="flex flex-wrap gap-3">
      {photos.map((photo, i) => {
        const isActive = i === activeIndex
        return (
          <li key={photo.id}>
            <button
              type="button"
              onClick={() => onSelect(i)}
              aria-label={formatText(t(UI_TEXT.goToPhoto), { current: i + 1 })}
              aria-current={isActive ? 'true' : undefined}
              className={`block aspect-[9/16] w-18 cursor-pointer overflow-hidden rounded-[10px] border-2 transition focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-forest ${
                isActive
                  ? 'border-forest outline-2 outline-offset-2 outline-gold'
                  : 'border-transparent opacity-70 hover:opacity-100'
              }`}
            >
              <img src={photo.url} alt="" loading="lazy" className="size-full object-cover object-top" />
            </button>
          </li>
        )
      })}
    </ul>
  )
}
