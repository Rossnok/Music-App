import { Stack } from '@mui/material'
import style from './layout.module.css'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <Stack direction={'row'} className={style.container}>
        {children}
    </Stack>
  )
}
