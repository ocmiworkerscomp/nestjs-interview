import { create } from 'zustand'
import { combine } from 'zustand/middleware'
import { UserType } from '@/types/models'

export const useAuthStore = create(
  combine({ user: null as UserType | null }, (set) => ({
    set,
    setUser: (user: UserType | null) => set((state) => ({ ...state, user })),
  })),
)
