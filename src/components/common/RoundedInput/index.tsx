import React from 'react'
import styles from './styles/roundedInput.module.css'

type RoundedInputProps = {
    type: string,
    field: string,
    placeholder: string,
    error: any
}

export default function RoundedInput({type, field, placeholder, error}: RoundedInputProps) {
  return (
    <>
        <input className={styles.input} type="text" />
    </>
  )
}
