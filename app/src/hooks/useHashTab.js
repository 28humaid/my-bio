import { useEffect, useState } from 'react'
import { DEFAULT_TAB, TAB_ORDER } from '../constants/tabs.js'

function readTabFromHash() {
  const tab = window.location.hash.slice(1)
  return TAB_ORDER.includes(tab) ? tab : null
}

/**
 * Active tab, mirrored in the URL hash (#language, #details, #images) so the
 * browser Back button moves between tabs. Every visit opens on DEFAULT_TAB,
 * even when the link or a page refresh carries another tab's hash.
 */
export default function useHashTab() {
  const [activeTab, setActiveTabState] = useState(DEFAULT_TAB)

  useEffect(() => {
    // Drop a hash left over from a shared link or refresh, without adding a history entry
    if (window.location.hash) {
      const { pathname, search } = window.location
      window.history.replaceState(null, '', pathname + search)
    }

    const handleHashChange = () => setActiveTabState(readTabFromHash() ?? DEFAULT_TAB)
    window.addEventListener('hashchange', handleHashChange)
    return () => window.removeEventListener('hashchange', handleHashChange)
  }, [])

  const setActiveTab = (tab) => {
    if (!TAB_ORDER.includes(tab)) return
    if (window.location.hash !== `#${tab}`) {
      window.location.hash = tab // fires hashchange, which updates state
    }
    window.scrollTo({ top: 0 })
  }

  return [activeTab, setActiveTab]
}
