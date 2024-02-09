import Image from 'next/image'
import React from 'react'
import styles from './styles/HeaderContainer.module.css'

type Props = {
  src: string,
  text: string,

}

export default function HeaderContainer({src, text}: Props) {
  return (
    <>
      <Image
        alt='image'
        style={{
          objectFit: 'cover'
        }}
        fill={true}
        quality={100}
        src={src}
      />
      <div className={styles.cover_image}>
        <p className={styles.content_text}>{text}</p>
      </div>
    </>
  )
}
