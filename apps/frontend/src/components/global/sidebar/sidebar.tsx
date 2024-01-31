import React, { FC, useRef } from 'react'
import { Sidebar, SidebarRefType } from '@lifespikes/ui'
import { useSidebarItems } from './use-sidebar-items'
import { Logo } from '@/components/global/logo'
import { useUrlChange } from '@/hooks/use-url-change'
import { UseDiscloseReturn } from '@/hooks/use-disclose'
import DarkModeSwitcher from '@/components/global/sidebar/dark-mode-switcher'

const SidebarC: FC<UseDiscloseReturn> = (props) => {
  const sidebarRef = useRef<SidebarRefType | null>(null)

  const { items } = useSidebarItems()

  useUrlChange(() => {
    props?.setIsOpen(false)
  })

  const renderLogo = () => {
    return (
      <div className="mt-2 flex w-full items-center justify-between">
        <Logo /> <DarkModeSwitcher />
      </div>
    )
  }

  return (
    <>
      <Sidebar
        ref={sidebarRef}
        items={items}
        hasMenuButton={false}
        renderLogo={renderLogo}
        modal={props}
      />
    </>
  )
}

export default SidebarC
