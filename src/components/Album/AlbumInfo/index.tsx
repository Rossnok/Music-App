import { Stack, Typography } from '@mui/material'
import Image from 'next/image'
import styles from './styles/albumInfo.module.css'

type AlbumInfoProps = {
  data: any
}

export default function AlbumInfo({ data }: AlbumInfoProps) {
  console.log(data)
  return (
    <Stack width={'100%'} height={'100%'} gap={2} alignItems={'center'} padding={'.5em .5em'} bgcolor={'#371287'}>
      <Stack width={'30%'} height={'30%'} position={'relative'}>
        <Image src={data.src} alt='album image info'
          style={{ objectFit: 'contain' }}
          layout="fill" />
      </Stack>
      <Stack width={'100%'} direction={'row'} gap={3} justifyContent={'center'}>
      <Stack direction={'row'} alignItems={'center'} gap={1}>
                    <Image src={'/images/albumicons/album.png'} alt="Album Icon" width={25} height={25} />
                    <Typography className={styles.info_text}>{data.name}</Typography>
                </Stack>
                <Stack direction={'row'} alignItems={'center'} gap={1}>
                    <Image src={'/images/albumicons/fecha.png'} alt="Album Icon" width={25} height={25} />
                    <Typography className={styles.info_text}>{data.publication}</Typography>
                </Stack>
                <Stack direction={'row'} alignItems={'center'} gap={1}>
                    <Image src={'/images/albumicons/music_genre.png'} alt="Album Icon" width={25} height={25} />
                    <Typography className={styles.info_text}>{data.genre}</Typography>
                </Stack>
                <Stack direction={'row'} alignItems={'center'} gap={1}>
                    <Image src={'/images/albumicons/tracks.png'} alt="Album Icon" width={25} height={25} />
                    <Typography className={styles.info_text}>{`${data.traks} Canciones`}</Typography>
                </Stack>
                <Stack direction={'row'} alignItems={'center'} gap={1}>
                    <Image src={'/images/albumicons/music_store.png'} alt="Album Icon" width={25} height={25} />
                    <Typography className={styles.info_text}>{`Discografica ${data.discografic}`}</Typography>
                </Stack>
      </Stack>
    </Stack>
  )
}
