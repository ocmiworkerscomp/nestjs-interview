import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'
import v from 'voca'
import { UsesHints } from '@/types/global'

export const labelHints: UsesHints = {
  email: 'Correo electronico',
}

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const labelFromFieldName = (name: string): string =>
  v.capitalize(
    v
      .words(name)
      .map((w) => {
        const idx = w.toLowerCase()
        return idx in labelHints ? labelHints[idx] : w
      })
      .join(' '),
  )

export const getUniqueId = (items: Record<any, any>[]): string => {
  const id = `${Math.random().toString(36).substr(2, 9)}`
  return items.find((item) => item.id === id) ? getUniqueId(items) : id
}
