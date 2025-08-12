export default function StudioLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="h-screen w-full overflow-hidden" suppressHydrationWarning>
      {children}
    </div>
  )
}