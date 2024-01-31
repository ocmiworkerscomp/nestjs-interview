import Link from 'next/link'
import DropdownUser from './dropdown-user'
import { Logo } from '@/components/global/logo'
import { Button } from '@lifespikes/ui'
import { AlignJustify } from 'lucide-react'
import { UseDiscloseReturn } from '@/hooks/use-disclose'

const Header = (props: UseDiscloseReturn) => {
  return (
    <header className="drop-shadow-1 sticky top-0 flex w-full  dark:bg-muted dark:drop-shadow-none">
      <div className="shadow-2 flex flex-grow items-center justify-between px-4 py-4 md:px-6 2xl:px-11">
        <div className="flex items-center gap-2 sm:gap-4 lg:hidden">
          <Button
            variant="unstyled"
            size="icon"
            aria-controls="sidebar"
            onClick={(e) => {
              e.stopPropagation()
              props?.setIsOpen(!props.isOpen)
            }}
          >
            <AlignJustify />
          </Button>
          <Link className="block flex-shrink-0 lg:hidden" href="/">
            <Logo className="h-12 w-12" />
          </Link>
        </div>

        <div className="hidden sm:block"></div>

        <div className="2xsm:gap-7 flex items-center gap-3">
          {/* <ul className="2xsm:gap-4 flex items-center gap-2">
            <DropdownNotification />
            <DropdownMessage />
          </ul>*/}

          <DropdownUser />
        </div>
      </div>
    </header>
  )
}

export default Header
