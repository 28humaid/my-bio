const iconProps = {
  width: 20,
  height: 20,
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 2,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
  'aria-hidden': true,
}

export function CloseIcon(props) {
  return (
    <svg {...iconProps} {...props}>
      <path d="M6 6l12 12M18 6L6 18" />
    </svg>
  )
}

/** Points toward the reading start; flips automatically in RTL */
export function ChevronStartIcon({ className = '', ...props }) {
  return (
    <svg {...iconProps} className={`rtl:rotate-180 ${className}`} {...props}>
      <path d="M15 6l-6 6 6 6" />
    </svg>
  )
}

/** Points toward the reading end; flips automatically in RTL */
export function ChevronEndIcon({ className = '', ...props }) {
  return (
    <svg {...iconProps} className={`rtl:rotate-180 ${className}`} {...props}>
      <path d="M9 6l6 6-6 6" />
    </svg>
  )
}

/** Arrow pointing toward the reading end; flips automatically in RTL */
export function ArrowEndIcon({ className = '', ...props }) {
  return (
    <svg {...iconProps} className={`rtl:rotate-180 ${className}`} {...props}>
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  )
}

export function CalendarIcon(props) {
  return (
    <svg {...iconProps} {...props}>
      <rect x="3" y="5" width="18" height="16" rx="2" />
      <path d="M3 10h18M8 3v4M16 3v4" />
    </svg>
  )
}

export function MapPinIcon(props) {
  return (
    <svg {...iconProps} {...props}>
      <path d="M12 21s-7-6.5-7-12a7 7 0 0 1 14 0c0 5.5-7 12-7 12z" />
      <circle cx="12" cy="9" r="2.5" />
    </svg>
  )
}

export function GraduationCapIcon(props) {
  return (
    <svg {...iconProps} {...props}>
      <path d="M2 9l10-5 10 5-10 5-10-5z" />
      <path d="M6 11v5c2 2 10 2 12 0v-5" />
    </svg>
  )
}

export function CakeIcon(props) {
  return (
    <svg {...iconProps} {...props}>
      <path d="M4 21v-8a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8M2 21h20" />
      <path d="M4 16c1.5 1 3 1 4.5 0s3-1 4.5 0 3 1 4.5 0 2.5-1 2.5-1M12 11V7M12 4.5V4" />
    </svg>
  )
}

export function RulerIcon(props) {
  return (
    <svg {...iconProps} {...props}>
      <rect x="7" y="2" width="10" height="20" rx="1.5" />
      <path d="M7 6h4M7 10h3M7 14h4M7 18h3" />
    </svg>
  )
}

export function HomeIcon(props) {
  return (
    <svg {...iconProps} {...props}>
      <path d="M3 11l9-7 9 7v9a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1z" />
      <path d="M10 21v-6h4v6" />
    </svg>
  )
}

export function BuildingIcon(props) {
  return (
    <svg {...iconProps} {...props}>
      <path d="M3 21h18M5 21V7l7-4 7 4v14" />
      <path d="M9 9h1M14 9h1M9 13h1M14 13h1M10 21v-4h4v4" />
    </svg>
  )
}

export function LanguagesIcon(props) {
  return (
    <svg {...iconProps} {...props}>
      <path d="M4 5h9M8.5 3v2M6 5c.5 3.5 3 6.5 6.5 8M11 5c-.8 4-3.6 7.3-7 9" />
      <path d="M13 21l4-9 4 9M14.5 18h5" />
    </svg>
  )
}

export function HeartIcon(props) {
  return (
    <svg {...iconProps} {...props}>
      <path d="M12 20s-7-4.5-9-9a4.5 4.5 0 0 1 9-2 4.5 4.5 0 0 1 9 2c-2 4.5-9 9-9 9z" />
    </svg>
  )
}

export function StarIcon(props) {
  return (
    <svg {...iconProps} {...props}>
      <path d="M12 3l2.7 5.6 6.1.9-4.4 4.3 1 6.1L12 17l-5.4 2.9 1-6.1-4.4-4.3 6.1-.9z" />
    </svg>
  )
}

export function UsersIcon(props) {
  return (
    <svg {...iconProps} {...props}>
      <circle cx="9" cy="8" r="3.5" />
      <path d="M2.5 20c.8-3.5 3.4-5.5 6.5-5.5s5.7 2 6.5 5.5" />
      <path d="M16 4.6a3.5 3.5 0 0 1 0 6.8M18 14.8c2 .7 3.2 2.5 3.5 5.2" />
    </svg>
  )
}

export function PhoneIcon(props) {
  return (
    <svg {...iconProps} {...props}>
      <path d="M5 3h3l2 5-2.5 1.5a11 11 0 0 0 7 7L16 14l5 2v3a2 2 0 0 1-2 2A17 17 0 0 1 3 5a2 2 0 0 1 2-2z" />
    </svg>
  )
}

export function LinkIcon(props) {
  return (
    <svg {...iconProps} {...props}>
      <path d="M10 13a5 5 0 0 0 7.5.5l3-3a5 5 0 0 0-7-7l-1.7 1.7" />
      <path d="M14 11a5 5 0 0 0-7.5-.5l-3 3a5 5 0 0 0 7 7l1.7-1.7" />
    </svg>
  )
}
