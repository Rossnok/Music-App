import Image from 'next/image'
import styles from './page.module.css'
import { Stack } from '@mui/material'
import RootLayout from '@/layout/MainLayout/layout'
import NavBar from '@/components/NavBar'
import HomeComponent from '@/components/HomeComponent'

export default function Home() {
  return (
    <RootLayout>
     <HomeComponent/>
    </RootLayout>
  )
}
