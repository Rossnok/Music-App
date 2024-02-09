import { Stack } from '@mui/material'
import style from './layout.module.css'
import HomeNavBar from '@/components/HomeNavBar'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <Stack direction={'column'} className={style.container}>
      <HomeNavBar/>
      {children}
    </Stack>
  )
}
