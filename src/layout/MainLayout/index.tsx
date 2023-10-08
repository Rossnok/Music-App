import { Stack } from '@mui/material'
import style from './layout.module.css'
import NavBar from '@/components/NavBar'


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <Stack direction={'row'} className={style.container}>
      <NavBar />
      {children}
    </Stack>
  )
}
