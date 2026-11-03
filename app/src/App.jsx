import Header from './components/layout/Header.jsx'
import VerseBanner from './components/layout/VerseBanner.jsx'
import { TAB } from './constants/tabs.js'
import useHashTab from './hooks/useHashTab.js'
import DetailsPage from './pages/DetailsPage.jsx'
import ImagesPage from './pages/ImagesPage.jsx'
import LanguagePage from './pages/LanguagePage.jsx'

export default function App() {
  const [activeTab, setActiveTab] = useHashTab()

  return (
    <div className="flex min-h-dvh flex-col">
      <VerseBanner />
      <Header activeTab={activeTab} onTabChange={setActiveTab} />

      <main className="mx-auto w-full max-w-5xl flex-1 px-5 py-6 sm:px-8 sm:py-12">
        {activeTab === TAB.LANGUAGE && (
          <LanguagePage onLanguageSelected={() => setActiveTab(TAB.DETAILS)} />
        )}
        {activeTab === TAB.DETAILS && <DetailsPage />}
        {activeTab === TAB.IMAGES && <ImagesPage />}
      </main>
    </div>
  )
}
