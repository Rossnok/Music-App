import { Stack, Typography } from "@mui/material"
import Image from "next/image"
import styles from './styles/carrucelCard.module.css'
import styled from "styled-components"

type CarrucelCardProps = {
    src: any,
    name: string,
    publication: string,
    traks: string,
    genre: string,
    discografic: string,
    onClick: any,
    $backgroundColor?: string
}

const InfoDiv = styled.div<{ $backgroundColor?: string }>`
    padding: .5em;
    height: 35%;
    background:${props => props.$backgroundColor || 'white'};
`

export default function CarrucelCard({ src, name, publication, traks, genre, discografic, onClick, $backgroundColor }: CarrucelCardProps) {
    return (
        <div onClick={() => {
            onClick({
                src: src,
                name: name,
                publication: publication,
                traks: traks,
                genre: genre,
                discografic: discografic
            })
        }} className={styles.card_container}>
            <div className={styles.image_container}>
                <Image
                    className={styles.next_image}
                    fill
                    sizes="100vh"
                    src={src}
                    alt="Music Album"
                />
            </div>
            <InfoDiv
                $backgroundColor={$backgroundColor}
            >
                <Stack direction={'row'} alignItems={'center'} gap={1}>
                    <Image src={'/images/albumicons/album.png'} alt="Album Icon" width={25} height={25} />
                    <Typography className={styles.info_text}>{name}</Typography>
                </Stack>
                <Stack direction={'row'} alignItems={'center'} gap={1}>
                    <Image src={'/images/albumicons/fecha.png'} alt="Album Icon" width={25} height={25} />
                    <Typography className={styles.info_text}>{publication}</Typography>
                </Stack>
                <Stack direction={'row'} alignItems={'center'} gap={1}>
                    <Image src={'/images/albumicons/music_genre.png'} alt="Album Icon" width={25} height={25} />
                    <Typography className={styles.info_text}>{genre}</Typography>
                </Stack>
                <Stack direction={'row'} alignItems={'center'} gap={1}>
                    <Image src={'/images/albumicons/tracks.png'} alt="Album Icon" width={25} height={25} />
                    <Typography className={styles.info_text}>{`${traks} Canciones`}</Typography>
                </Stack>
                <Stack direction={'row'} alignItems={'center'} gap={1}>
                    <Image src={'/images/albumicons/music_store.png'} alt="Album Icon" width={25} height={25} />
                    <Typography className={styles.info_text}>{`Discografica ${discografic}`}</Typography>
                </Stack>
            </InfoDiv>
        </div>
    )
}
