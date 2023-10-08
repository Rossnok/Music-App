import { Stack, Typography } from "@mui/material"
import Image from "next/image"
import styles from './styles/carrucelCard.module.css'

type CarrucelCardProps = {
    src: any,
    name: string,
    publication: string,
    traks: string,
    genre: string,
    discografic: string
}

export default function CarrucelCard({ src, name, publication, traks, genre, discografic }: CarrucelCardProps) {
    return (
        <div className={styles.card_container}>
            <div className={styles.image_container}>
                <Image
                    className={styles.next_image}
                    style={{ objectFit: 'contain' }}
                    layout="fill"
                    src={src} alt="Music Album"
                />
            </div>
            <Stack className={styles.info_container}>
                <Stack direction={'row'} alignItems={'center'} gap={1}>
                    <Image src={'/images/albumicons/album.png'} alt="Album Icon" width={25} height={25}/>
                    <Typography className={styles.info_text}>{name}</Typography>
                </Stack>
                <Stack direction={'row'} alignItems={'center'} gap={1}>
                    <Image src={'/images/albumicons/fecha.png'} alt="Album Icon" width={25} height={25}/>
                    <Typography className={styles.info_text}>{publication}</Typography>
                </Stack>
                <Stack direction={'row'} alignItems={'center'} gap={1}>
                    <Image src={'/images/albumicons/music_genre.png'} alt="Album Icon" width={25} height={25}/>
                    <Typography className={styles.info_text}>{genre}</Typography>
                </Stack>
                <Stack direction={'row'} alignItems={'center'} gap={1}>
                    <Image src={'/images/albumicons/tracks.png'} alt="Album Icon" width={25} height={25}/>
                    <Typography className={styles.info_text}>{`${traks} Canciones`}</Typography>
                </Stack>
                <Stack direction={'row'} alignItems={'center'} gap={1}>
                    <Image src={'/images/albumicons/music_store.png'} alt="Album Icon" width={25} height={25}/>
                    <Typography className={styles.info_text}>{`Discografica ${discografic}`}</Typography>
                </Stack>
            </Stack>
        </div>
    )
}
