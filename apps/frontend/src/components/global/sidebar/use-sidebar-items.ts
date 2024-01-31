import Link from 'next/link'
import { HomeIcon, LogOut, ShieldPlusIcon, Users } from 'lucide-react'
import { usePathname } from 'next/navigation'
import { SidebarItem } from '@lifespikes/ui'
import { signOut } from 'next-auth/react'

export const useSidebarItems = () => {
  const pathname = usePathname()

  const mapSidebarItem = (item: SidebarItem): SidebarItem => {
    const isCurrent = pathname === item.href

    if ((item.children ?? []).length > 0) {
      return {
        ...item,
        current: isCurrent,
        children: (item.children ?? []).map(mapSidebarItem),
      }
    }

    // @ts-ignore
    return { ...item, current: isCurrent, as: item.as ?? Link }
  }

  const items: SidebarItem[] = (
    [
      {
        label: 'Dashboard',
        href: '/',
        icon: HomeIcon,
      },
      {
        label: 'Pacientes',
        icon: Users,
        href: '/patients',
      },
      {
        label: 'Administración',
        icon: ShieldPlusIcon,
        children: [
          {
            label: 'Pacientes',
            href: '/patients',
          },
          {
            label: 'Usuarios',
            href: '/admin/users',
          },
        ],
      },

      {
        label: 'Salir',
        href: '/logout',
        icon: LogOut,
        as: 'button',
        onClick() {
          signOut()
        },
        toBottomPosition: true,
      },
    ] as SidebarItem[]
  ).map(mapSidebarItem)

  return { items }
}
