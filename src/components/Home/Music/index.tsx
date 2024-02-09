import React from 'react'
import styles from './styles/Music.module.css'
import Image from 'next/image'
import MusicCardView from '@/components/common/MusicCardView'
import GenreCardView from '@/components/common/GenreCardView'

//TODO agregar un mapeo a un arreglo entrante para que se coloquen las 6 cards automaticamente en lugar de poner todas de forma individual

type Props = {
  text: string,
  title: string,
  src: string,
  isMusicComponent: boolean
}

export default function Music({ text, title, src, isMusicComponent }: Props) {
  return (
    <div className={styles.container}>
      <Image
        alt='music box image'
        style={{
          objectFit: 'cover',
        }}
        fill
        src={src}
      />
      <div className={styles.cover}>
        <span className={styles.title_text}>{title}</span>
        <span className={styles.content_text}>{text}</span>
        {isMusicComponent &&
          <div className={styles.music_cards_container}>
            <MusicCardView
              src='/images/albums/David-Bowie-Heroes.jpg'
              name='Space Oddity'
              performer='David Bowie'
            />
            <MusicCardView
              src='/images/albums/David-Bowie-Heroes.jpg'
              name='Space Oddity'
              performer='David Bowie'
            />
            <MusicCardView
              src='/images/albums/David-Bowie-Heroes.jpg'
              name='Space Oddity'
              performer='David Bowie'
            />
            <MusicCardView
              src='/images/albums/David-Bowie-Heroes.jpg'
              name='Space Oddity'
              performer='David Bowie'
            />
            <MusicCardView
              src='/images/albums/David-Bowie-Heroes.jpg'
              name='Space Oddity'
              performer='David Bowie'
            />
            <MusicCardView
              src='/images/albums/David-Bowie-Heroes.jpg'
              name='Space Oddity'
              performer='David Bowie'
            />
          </div>
        }
        {!isMusicComponent &&
          <div className={styles.genres_container}>
            <GenreCardView
              name='Pop'
              src='/images/backgroundImages/Pop_genre.jpg'
            />
            <GenreCardView
              name='Pop'
              src='/images/backgroundImages/Pop_genre.jpg'
            />
            <GenreCardView
              name='Pop'
              src='/images/backgroundImages/Pop_genre.jpg'
            />
            <GenreCardView
              name='Pop'
              src='/images/backgroundImages/Pop_genre.jpg'
            />
            <GenreCardView
              name='Pop'
              src='/images/backgroundImages/Pop_genre.jpg'
            />
          </div>
        }
      </div>
    </div>
  )
}
