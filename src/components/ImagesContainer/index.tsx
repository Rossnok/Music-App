import { Stack } from '@mui/material'
import data from '../../helpers/data'
import CarrucelCard from '../CarrucelCard'
import { useRouter } from 'next/router'

export default function ImagesContainer() {
    const router = useRouter();

    const { albumsData } = data()

    const onClick = (data: any) => {
      router.push({
        pathname: '/album/index',
        query: data
      });
    }

    return (
        <Stack direction={'row'} flexWrap={'wrap'} padding={'.8em 0em 0em 1em'} width={'100%'} gap={3} overflow={'auto'}>
            {albumsData && albumsData.map((album, index) => {
                return (
                    <Stack key={index}>
                        <CarrucelCard
                            onClick={onClick}
                            name={album.albumName ? album.albumName : ''}
                            publication={album.year ? album.year : ''}
                            traks={album.tracks ? album.tracks : ''}
                            discografic={album.recordCompany ? album.recordCompany : ''}
                            genre={album.genre ? album.genre : ''}
                            src={album.src ? album.src : ''}
                        />
                    </Stack>
                )
            })
            }
        </Stack>
    )
}
