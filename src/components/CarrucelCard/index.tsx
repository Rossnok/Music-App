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

const InfoDiv = styled.div`
    padding: .5em;
    height: 100%;
    background: #3939397e;
    border-radius: 0em 1em 1em 0em;
    width: 50%;
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
                    sizes="50vh"
                    src={src}
                    alt="Music Album"
                />
            </div>
            <InfoDiv>
                {
                    <Stack direction={'row'} alignItems={'center'} gap={1}>
                        <Image src={'/images/albumicons/album.svg'} alt="Album Icon" width={25} height={25} />
                        <Typography className={styles.info_text}>{name}</Typography>
                    </Stack>
                }
            </InfoDiv>
        </div>
    )
}
