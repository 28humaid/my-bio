import useLanguage from '../../i18n/useLanguage.js'
import { FIELD_ICONS } from './fieldIcons.js'

/** Short statements with an icon each, followed by an optional closing note */
export default function PointList({ points, note }) {
  const { t } = useLanguage()

  return (
    <div className="flex flex-col gap-5">
      <ul className="flex flex-col gap-4">
        {points.map((point) => {
          const Icon = FIELD_ICONS[point.icon]

          return (
            <li key={point.id} className="flex items-start gap-3.5">
              <span className="mt-0.5 flex size-9 shrink-0 items-center justify-center rounded-full bg-cream-dark text-gold-dark">
                {Icon && <Icon width={18} height={18} />}
              </span>
              <p className="text-[15px] leading-relaxed md:text-base">{t(point.text)}</p>
            </li>
          )
        })}
      </ul>

      {note && (
        <p className="heading border-s-2 border-gold ps-4 text-lg font-semibold text-gold-dark italic">
          {t(note)}
        </p>
      )}
    </div>
  )
}
