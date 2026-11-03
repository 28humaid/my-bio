import useLanguage from '../../i18n/useLanguage.js'
import FamilyMemberCard from './FamilyMemberCard.jsx'

/**
 * A generation on the timeline (Grandparents, Parents, Siblings).
 * Mobile: label above the cards. Desktop: label in a column left of the rail.
 */
export default function FamilyGroup({ group }) {
  const { t } = useLanguage()
  const headingId = `family-${group.id}`

  return (
    <section
      aria-labelledby={headingId}
      className="flex flex-col gap-3 md:grid md:grid-cols-[150px_minmax(0,1fr)] md:gap-0"
    >
      <h3
        id={headingId}
        className={
          'eyebrow relative mt-2.5 text-forest md:mt-3.5 md:pe-7 md:text-end ' +
          // Diamond marker on the rail
          'before:absolute before:-start-[27px] before:-top-px before:size-3.5 before:rotate-45 before:border-2 before:border-gold before:bg-forest ' +
          'md:before:start-auto md:before:-end-2 md:before:size-4'
        }
      >
        {t(group.title)}
      </h3>

      <div className="grid gap-3 md:grid-cols-2 md:gap-4 md:ps-9">
        {group.members.map((member) => (
          <FamilyMemberCard key={member.id} member={member} />
        ))}
      </div>
    </section>
  )
}
