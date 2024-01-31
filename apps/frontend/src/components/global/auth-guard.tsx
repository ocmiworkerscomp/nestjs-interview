import React, { FC, PropsWithChildren, useEffect } from 'react'
import { useSession } from 'next-auth/react'

import { useAuth } from '@/hooks/use-auth'
import { NextAuthSessionType } from '@/types/models'
import { PUBLIC_ROUTES } from 'auth'
import { usePathname } from 'next/navigation'

const AuthGuard: FC<PropsWithChildren> = ({ children }) => {
  const { data, status } = useSession()
  const { setUser } = useAuth()

  const pathname = usePathname()

  const session = data as unknown as NextAuthSessionType

  const account = session?.account

  useEffect(() => {
    if (account) {
      setUser(account)
    }
  }, [account, setUser])

  if (status === 'loading' || (!PUBLIC_ROUTES.includes(pathname) && !account)) {
    return 'loading...'
  }

  return <>{children}</>
}

export default AuthGuard
