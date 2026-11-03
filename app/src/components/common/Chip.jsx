const sizeClass = {
  sm: 'gap-1 px-2.5 py-1 text-xs',
  md: 'gap-1.5 px-3 py-1.5 text-[13px] md:px-3.5',
}

/** Small rounded tag, optionally with an icon before the text */
export default function Chip({ icon: Icon, size = 'md', children }) {
  return (
    <span
      className={`inline-flex items-center rounded-full bg-cream-dark font-bold ${sizeClass[size]}`}
    >
      {Icon && <Icon width={15} height={15} className="shrink-0" />}
      {children}
    </span>
  )
}
