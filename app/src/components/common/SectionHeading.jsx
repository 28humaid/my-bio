/** Heading followed by a thin gold rule that fills the remaining width */
export default function SectionHeading({ as: Tag = 'h2', children }) {
  return (
    <div className="flex items-center gap-2.5">
      <Tag className="heading text-[22px] text-forest sm:text-2xl">{children}</Tag>
      <span aria-hidden="true" className="h-px flex-1 bg-gold" />
    </div>
  )
}
