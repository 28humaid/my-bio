/** Decorative gold rule with a diamond in the middle */
export default function Divider() {
  return (
    <div aria-hidden="true" className="flex w-full items-center gap-2.5">
      <span className="h-px flex-1 bg-gold" />
      <span className="size-2 rotate-45 bg-gold" />
      <span className="h-px flex-1 bg-gold" />
    </div>
  )
}
