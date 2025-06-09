import { auth } from '@clerk/nextjs/server'
import { redirect } from 'next/navigation'

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const { userId } = await auth()

  if (!userId) {
    redirect('/sign-in')
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="flex">
        {/* Sidebar */}
        <aside className="w-64 border-r border-border bg-card">
          <div className="p-6">
            <div className="flex items-center space-x-2 mb-8">
              <div className="w-8 h-8 bg-gradient-to-r from-grape-500 to-vine-500 rounded-lg"></div>
              <span className="text-xl font-bold gradient-text">GRPVNE</span>
            </div>
            
            <nav className="space-y-2">
              <a href="/dashboard" className="flex items-center space-x-2 px-3 py-2 rounded-md hover:bg-accent transition-colors">
                <span>📊</span>
                <span>Dashboard</span>
              </a>
              <a href="/workflows" className="flex items-center space-x-2 px-3 py-2 rounded-md hover:bg-accent transition-colors">
                <span>⚡</span>
                <span>Workflows</span>
              </a>
              <a href="/integrations" className="flex items-center space-x-2 px-3 py-2 rounded-md hover:bg-accent transition-colors">
                <span>🔗</span>
                <span>Integrations</span>
              </a>
              <a href="/analytics" className="flex items-center space-x-2 px-3 py-2 rounded-md hover:bg-accent transition-colors">
                <span>📈</span>
                <span>Analytics</span>
              </a>
              <a href="/settings" className="flex items-center space-x-2 px-3 py-2 rounded-md hover:bg-accent transition-colors">
                <span>⚙️</span>
                <span>Settings</span>
              </a>
            </nav>
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1">
          {children}
        </main>
      </div>
    </div>
  )
}