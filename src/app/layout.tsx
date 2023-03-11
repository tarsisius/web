import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import 'lib/styles/globals.css'
import Link from 'next/link'

type Props = {
  children: React.ReactNode
}

const as = Inter({
  variable: '--inter',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: {
    default: 'thp',
    template: '%s | thp',
  },
  description: 'thp private property',
  icons: {
    shortcut: '/logo.svg',
  },
}

export default function RootLayout({ children }: Props) {
  return (
    <html lang='en'>
      <head />
      <body className={`${as.className}`}>
        <div className='flex flex-col min-h-screen'>
          <div className='h-full lg:px px-10'>
            <div className='flex flex-col max-w-3xl mx-auto my-16 sm:px-0'>
              <Link  href={'/'} className='text-5xl font-bold'>
                t<span className='bg-black text-white'>h</span>p
              </Link >
              {children}
            </div>
          </div>
        </div>
      </body>
    </html>
  )
}
