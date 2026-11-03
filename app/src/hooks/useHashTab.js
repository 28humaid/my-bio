import { useEffect, useState } from 'react'
import { DEFAULT_TAB, TAB_ORDER } from '../constants/tabs.js'

function readTabFromHash() {
  const tab = window.location.hash.slice(1)
  return TAB_ORDER.includes(tab) ? tab : null
}

/**
 * Active tab, mirrored in the URL hash (#language, #details, #images) so
 * links can open a specific section and the browser Back button works.
 */
export default function useHashTab() {
  const [activeTab, setActiveTabState] = useState(() => readTabFromHash() ?? DEFAULT_TAB)

  useEffect(() => {
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
