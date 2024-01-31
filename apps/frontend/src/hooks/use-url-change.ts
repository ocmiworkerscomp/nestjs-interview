import { useEffect } from 'react'
import { useNavigation } from '@/hooks/use-navigation'

export const useUrlChange = (onNavigationChange?: () => void) => {
  const { pathname } = useNavigation()
  useEffect(() => {
    onNavigationChange?.()
  }, [onNavigationChange, pathname])
}
