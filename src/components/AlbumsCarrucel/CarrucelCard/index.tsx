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
        <Stack className={styles.card_container}>
            <Stack className={styles.image_container}>
                <Image
                    className={styles.image_border}
                    fill={true}
                    objectFit="contain"
                    src={src} alt="Music Album"
                />
            </Stack>
            <Stack gap={.3}>
                <Typography className={styles.info_text}>{name}</Typography>
                <Typography className={styles.info_text}>{publication}</Typography>
                <Typography className={styles.info_text}>{traks}</Typography>
                <Typography className={styles.info_text}>{genre}</Typography>
                <Typography className={styles.info_text}>{discografic}</Typography>
            </Stack>
        </Stack>
    )
}
