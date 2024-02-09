import React from 'react'
import styles from './styles/MusicCardView.module.css'
import Image from 'next/image'

type Props = {//TODO quitar que se puedan admitir null despues de terminar las pruebas primarias
  name?: string,
  performer?: string,
  src?: string,
}

export default function MusicCardView({ name, performer, src }: Props) {
  return (
    <div className={styles.container}>
      <Image
        alt='Music image'
        src={src!}
        fill={true}
        className={styles.image}
        style={{
          objectFit: 'cover',
        }}
      />
      <div className={styles.black_cover}>
        <p className={styles.name_text}>
          {name}
        </p>
        <p className={styles.performer_text}>
          {performer}
        </p>
      </div>
    </div>
  )
}
