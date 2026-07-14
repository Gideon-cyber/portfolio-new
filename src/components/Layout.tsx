import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { CustomCursor } from '@/components/cursor/CustomCursor'
import { PageTransition } from '@/components/motion/PageTransition'

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <CustomCursor />
      <div className="relative flex w-full flex-col min-h-screen bg-[#0A0A0A]">
        <Header />
        <main className="flex-auto">
          <PageTransition>{children}</PageTransition>
        </main>
        <Footer />
      </div>
    </>
  )
}
