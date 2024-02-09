import React from 'react'
import styles from './styles/GenresCardView.module.css'
import Image from 'next/image'

type Props = {
  src: string,
  name: string
}

export default function GenreCardView({ src, name }: Props) {
  return (
    <div className={styles.container}>
      <Image
          alt='Genre image'
          src={src}
          fill
          style={{
            objectFit:'cover',
            borderRadius: '1em'
          }}
        />
      <div className={styles.black_cover}>        
        <p className={styles.genre_name_text}>{name}</p>
      </div>
    </div>
  )
}
