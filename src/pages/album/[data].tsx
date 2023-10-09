import AlbumInfo from '@/components/Album/AlbumInfo'
import RootLayout from '@/layout/MainLayout'
import { useRouter } from 'next/router'
import React from 'react'

export default function SingleAlbumInfo() {
    const router = useRouter()
    
  return (
    <RootLayout>
      <AlbumInfo data={router.query} ></AlbumInfo>
    </RootLayout>
  )
}
