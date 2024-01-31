import AppLayout from '@/components/global/app-layout'
import { FC, PropsWithChildren } from 'react'

const DashboardLayout: FC<PropsWithChildren> = ({ children }) => {
  return <AppLayout>{children}</AppLayout>
}

export default DashboardLayout
