/**
 * localStorage wrappers that never throw. Storage can be unavailable in
 * private browsing or when the user blocks site data.
 */

export function readStorage(key) {
  try {
    return window.localStorage.getItem(key)
  } catch {
    return null
  }
}

export function writeStorage(key, value) {
  try {
    window.localStorage.setItem(key, value)
  } catch {
    // Storage unavailable: the preference simply isn't remembered
  }
}
