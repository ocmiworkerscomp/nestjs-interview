import Link from 'next/link'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
  SimpleAvatar,
} from '@lifespikes/ui'
import { useAuth } from '@/hooks/use-auth'
import { signOut } from 'next-auth/react'

const DropdownUser = () => {
  const { user } = useAuth()

  const name = user?.name ?? 'U'

  return (
    <div className="relative">
      {/* <!-- Dropdown Start --> */}
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Link className="flex items-center gap-4" href="#">
            <span className="hidden text-right lg:block">
              <span className="block text-sm font-medium text-black dark:text-white">
                {name}
              </span>
              <span className="block text-xs">{name}</span>
            </span>

            <span className="h-12 w-12 rounded-full">
              <SimpleAvatar url={name ?? ''} title={name} />
            </span>

            <svg
              className="hidden fill-current sm:block"
              width="12"
              height="8"
              viewBox="0 0 12 8"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M0.410765 0.910734C0.736202 0.585297 1.26384 0.585297 1.58928 0.910734L6.00002 5.32148L10.4108 0.910734C10.7362 0.585297 11.2638 0.585297 11.5893 0.910734C11.9147 1.23617 11.9147 1.76381 11.5893 2.08924L6.58928 7.08924C6.26384 7.41468 5.7362 7.41468 5.41077 7.08924L0.410765 2.08924C0.0853277 1.76381 0.0853277 1.23617 0.410765 0.910734Z"
                fill=""
              />
            </svg>
          </Link>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="z-99 w-56">
          <DropdownMenuItem>Cuenta</DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem
            onClick={() => {
              signOut()
            }}
          >
            Cerrar sesión
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
      {/* <!-- Dropdown End --> */}
    </div>
  )
}

export default DropdownUser
