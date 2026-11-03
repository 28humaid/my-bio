/** A photo that opens the full-screen viewer when tapped */
export default function PhotoTile({ src, label, onOpen, className = '' }) {
  return (
    <button
      type="button"
      onClick={onOpen}
      aria-label={label}
      className={`group block cursor-pointer overflow-hidden bg-forest-light focus-visible:outline-2 focus-visible:outline-offset-[-4px] focus-visible:outline-gold-light ${className}`}
    >
      <img
        src={src}
        alt=""
        decoding="async"
        draggable="false"
        className="size-full object-cover object-top transition-transform duration-300 group-hover:scale-[1.02]"
      />
    </button>
  )
}
