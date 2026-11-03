import { UI_TEXT } from '../../i18n/translations.js'
import useLanguage from '../../i18n/useLanguage.js'

/**
 * One family member. Every field except `relation` is optional:
 * siblings have no name, grandparents have no role or details.
 */
export default function FamilyMemberCard({ member }) {
  const { t } = useLanguage()
  const { relation, name, isLate = false, role, details = [] } = member
  const hasName = Boolean(name)

  return (
    <article
      className={
        'relative flex flex-col gap-1.5 rounded-2xl border border-sand bg-white px-4 py-3.5 md:px-5 md:py-4.5 ' +
        // Gold dot that sits on the timeline rail (mobile only)
        'before:absolute before:-start-[25px] before:top-5 before:size-[9px] before:rounded-full before:bg-gold md:before:hidden'
      }
    >
      <p className="eyebrow">{t(relation)}</p>

      {hasName && (
        <h4 className={`heading leading-tight text-forest text-[18px] font-bold'}`}>
          {isLate && <span className="text-gold-dark">{t(UI_TEXT.late)} </span>}
          {t(name)}
        </h4>
      )}

      {role && (
        <p className={`font-bold text-[12px]`}>{t(role)}</p>
      )}

      {details.length > 0 && (
        <ul className="flex flex-col gap-1">
          {details.map((detail) => (
            <li key={detail.en} className="text-[11px] leading-relaxed">
              {t(detail)}
            </li>
          ))}
        </ul>
      )}
    </article>
  )
}
