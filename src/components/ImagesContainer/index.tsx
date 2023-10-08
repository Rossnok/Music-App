import { Stack } from '@mui/material'
import data from '../AlbumsCarrucel/data'
import CarrucelCard from '../AlbumsCarrucel/CarrucelCard'

export default function ImagesContainer() {
    const { albumsData } = data()


    return (
        <Stack direction={'row'} flexWrap={'wrap'} gap={3} overflow={'auto'}>
            {albumsData && albumsData.map((album, index) => {
                return (
                    <>
                        <CarrucelCard
                            name={album.albumName ? album.albumName : ''}
                            publication={album.year ? album.year : ''}
                            traks={album.tracks ? album.tracks : ''}
                            discografic={album.recordCompany ? album.recordCompany : ''}
                            genre={album.genre ? album.genre : ''}
                            src={album.src ? album.src : ''}
                        />
                    </>
                )
            })
            }
        </Stack>
    )
}
