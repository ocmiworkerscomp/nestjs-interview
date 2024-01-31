import { useAuthStore } from '@/global-stores/use-auth-store'

export const useAuth = () => {
  const authStore = useAuthStore()

  const isAdmin = authStore.user?.role === 'admin'
  return {
    ...authStore,
    isAuthenticated: !!authStore.user,
    isAdmin,
    //redirectUri: isAdmin ? '/admin' : '/users',
  }
}
