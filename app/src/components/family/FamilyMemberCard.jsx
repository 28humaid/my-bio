import { UI_TEXT } from '../../i18n/translations.js'
import useLanguage from '../../i18n/useLanguage.js'

/**
 * One family member. Every field except `relation` is optional:
 * siblings have no name, grandparents have no role or details.
 * `salutation` (Mr., Mrs.) is shown before the name.
 */
export default function FamilyMemberCard({ member }) {
  const { t } = useLanguage()
  const { relation, salutation, name, isLate = false, role, details = [] } = member
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
        <h4 className="heading text-[18px] leading-tight font-bold text-forest">
          {isLate && <span className="text-gold-dark">{t(UI_TEXT.late)} </span>}
          {salutation && `${t(salutation)} `}
          {t(name)}
        </h4>
      )}

      {role && (
        <p className="text-[12px] font-bold">{t(role)}</p>
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
