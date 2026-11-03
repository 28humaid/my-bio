import FamilyGroup from './FamilyGroup.jsx'

/** Generations stacked along a vertical gold rail */
export default function FamilyTimeline({ groups }) {
  return (
    <div className="relative flex flex-col gap-3 ps-[30px] md:gap-6.5 md:ps-0">
      <span
        aria-hidden="true"
        className="absolute inset-y-2 start-[9px] w-0.5 bg-gold md:start-[149px]"
      />
      {groups.map((group) => (
        <FamilyGroup key={group.id} group={group} />
      ))}
    </div>
  )
}
