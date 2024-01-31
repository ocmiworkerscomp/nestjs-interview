'use client'

import { SessionProvider } from 'next-auth/react'
import { FC, PropsWithChildren, useState } from 'react'
import { DialogProvider, Toaster } from '@lifespikes/ui'
import AuthGuard from '@/components/global/auth-guard'
import { ThemeProvider } from '@/components/global/theme-provider'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { ReactQueryStreamedHydration } from '@tanstack/react-query-next-experimental'

const AppProvider: FC<PropsWithChildren<{ session: any }>> = ({
  children,
  session,
}) => {
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            staleTime: 5 * 1000,
          },
        },
      }),
  )

  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="light"
      enableSystem
      disableTransitionOnChange
    >
      <QueryClientProvider client={queryClient}>
        <Toaster />
        <ReactQueryStreamedHydration>
          <SessionProvider session={session}>
            <DialogProvider>
              <AuthGuard>{children}</AuthGuard>
            </DialogProvider>
          </SessionProvider>
        </ReactQueryStreamedHydration>
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </ThemeProvider>
  )
}

export default AppProvider
