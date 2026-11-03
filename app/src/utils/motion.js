/** Smooth scrolling, unless the user has asked the OS for reduced motion */
export function getScrollBehavior() {
  const reduce = window.matchMedia?.('(prefers-reduced-motion: reduce)').matches
  return reduce ? 'auto' : 'smooth'
}
