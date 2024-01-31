import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
//import '@lifespikes/ui/style.css'
import { cn } from '@/lib/utils'
import { auth } from 'auth'
import AppProvider from '@/components/global/app-provider'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Denty app',
  description: 'The best application to manage your dentistry',
}

export default async function RootLayout(props: { children: React.ReactNode }) {
  const session = await auth()

  return (
    <html
      lang="es"
      className={cn(
        'h-full scroll-smooth bg-white antialiased',
        inter.className,
      )}
      suppressHydrationWarning
    >
      <body className="flex h-full flex-col bg-background">
        <AppProvider session={session}>{props.children}</AppProvider>
      </body>
    </html>
  )
}
