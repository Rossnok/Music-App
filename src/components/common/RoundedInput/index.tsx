import React from 'react'
import styles from './styles/roundedInput.module.css'

type RoundedInputProps = {
  type: string,
  field: string,
  placeholder: string,
  error: any,
  register: any,
  label?: string,
  onBlur?: any
}

export default function RoundedInput({ type, field, placeholder, error, register, label, onBlur }: RoundedInputProps) {
  return (
    <div className={styles.input_container} >
      <input
        onBlurCapture={() => {onBlur([field])}}
        {...register(field)}
        className={styles.input}
        type={type}
        placeholder={`${placeholder}...`} />
      <label htmlFor={field} className={styles.form_inputLabel}><span className={error && styles.labelError_color}>{error.message ? error.message : ''}</span></label>
    </div>
  )
}
