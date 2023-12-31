import dynamic from 'next/dynamic'
// import Plum from '@/components/Plum'
const Plum = dynamic(() => import('@/components/Plum'), {
  ssr: false,
})
import Header from '../components//Header'
import './globals.css'
import type { Metadata } from 'next'
const ThemeProvider = dynamic(() => import('../components/Header/components//Theme/provider'), {
  ssr: false,
})

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider>
          <div id="__next">
            <div id="app" className="h-100% flex flex-col">
              <Header />
              <main>{children}</main>
              <footer>footer</footer>
            </div>
            <Plum />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
