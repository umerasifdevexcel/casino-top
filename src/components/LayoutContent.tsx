'use client'

import { usePathname } from 'next/navigation'
import Header from './Header'

export default function LayoutContent({
  children,
}: {
  children: React.ReactNode
}) {
  const pathname = usePathname()
  const isStudioRoute = pathname.startsWith('/studio')

  if (isStudioRoute) {
    return <div className="h-screen">{children}</div>
  }

  return (
    <>
      <Header />
      <main className="min-h-screen pt-5 pb-20">
        {children}
      </main>
    </>
  )
}