import Image from 'next/image'
import React, { FC } from 'react'
import { cn } from '@/lib/utils'

export const Logo: FC<
  Omit<React.ComponentPropsWithoutRef<typeof Image>, 'src' | 'alt'>
> = (props) => {
  return (
    <Image
      width={120}
      height={120}
      {...props}
      className={cn(props.className)}
      src="/logo_2_uwu.png"
      alt="app logo"
    />
  )
}
