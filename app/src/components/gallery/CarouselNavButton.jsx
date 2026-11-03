import { ChevronEndIcon, ChevronStartIcon } from '../common/Icons.jsx'

const variantClass = {
  // Floats over the photo (mobile)
  overlay: 'size-11 border-gold bg-forest/85 text-gold-light backdrop-blur-sm',
  // Sits in the side panel (desktop)
  solid: 'size-12 border-gold bg-forest text-gold-light hover:bg-forest-light',
}

/** Round previous/next button. `direction` is 'previous' or 'next'; icons mirror in RTL. */
export default function CarouselNavButton({ direction, label, onClick, variant = 'solid', className = '' }) {
  const Icon = direction === 'previous' ? ChevronStartIcon : ChevronEndIcon

  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={label}
      className={`flex cursor-pointer items-center justify-center rounded-full border transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold ${variantClass[variant]} ${className}`}
    >
      <Icon />
    </button>
  )
}
