'use client'

import { FC, PropsWithChildren, useEffect, useState } from 'react'
import Sidebar from '@/components/global/sidebar/sidebar'
import Header from '@/components/global/header/header'
import { useDisclose } from '@/hooks/use-disclose'

const AppLayout: FC<PropsWithChildren> = ({ children }) => {
  const modal = useDisclose()

  const [isLoading, setIsLoading] = useState<boolean>(true)

  useEffect(() => {
    setTimeout(() => setIsLoading(false), 1000)
  }, [])

  return (
    <>
      <div className="h-full">
        {isLoading ? (
          'loading...'
        ) : (
          <div className="flex h-screen overflow-hidden">
            <Sidebar {...modal} />

            <div className="relative flex flex-1 flex-col overflow-y-auto overflow-x-hidden">
              <Header {...modal} />

              <main className="w-full lg:pl-72">
                <div className="mx-auto h-full max-w-screen-2xl p-4 md:p-6 2xl:p-10">
                  {children}
                </div>
              </main>
            </div>
          </div>
        )}
      </div>
    </>
  )
}

export default AppLayout
