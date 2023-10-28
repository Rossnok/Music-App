import { Stack } from '@mui/material'
import style from './layout.module.css'
import MainMenu from '@/components/MainMenu'


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <Stack direction={'row'} className={style.container}>
        <MainMenu />
        {children}
    </Stack>
  )
}
