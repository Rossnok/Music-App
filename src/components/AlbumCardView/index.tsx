import Image from "next/image"
import styles from './styles/AlbumCardView.module.css'
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
    height: 100%;
    width: 85%;
    display:flex;
    flex-flow: row nowrap;
`

export default function AlbumCardView({ src, name, publication, traks, genre, discografic, onClick, $backgroundColor }: CarrucelCardProps) {
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
                    fill={true}
                    sizes="100vw"
                    src={src}
                    alt="Music Album"
                />
            </div>
            <InfoDiv>
                <div className={styles.info_container} >
                    <p className={styles.song_title}>{'Over 85'}</p>
                    <p className={styles.song_artist}>{'Osean Log'}</p>                    
                </div>
                <div className={styles.fav_icon_container}>
                        <Image                            
                            width={40}
                            height={40}
                            src={'/images/fav_unmarked.png'}
                            alt="Music Album"
                        />
                    </div>
            </InfoDiv>
        </div>
    )
}
