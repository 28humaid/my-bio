import TabNav from './TabNav.jsx'

export default function Header({ activeTab, onTabChange }) {
  return (
    <header className="sticky top-0 z-20 border-b-[3px] border-gold bg-forest">
      <div className="mx-auto flex max-w-5xl justify-center px-4 py-3 sm:px-8">
        <TabNav activeTab={activeTab} onTabChange={onTabChange} />
      </div>
    </header>
  )
}
