import React from 'react'
import styles from './styles/roundedInput.module.css'
import styled from 'styled-components'
import { Stack } from '@mui/material'

type RoundedInputProps = {
  type: string,
  field: string,
  placeholder?: string,
  error: any,
  register: any,
  label?: string,
  onBlur?: any,

  //styled props
  $background?: string,
  $border?: string
  $width?: string,
  $alingSelf?: string
  $color?: string,
  $height?: string
}

const Input = styled.input<RoundedInputProps>`
    color: ${props => props.$color || 'black'};
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    height: ${props => props.$height || "40px"};
    width: ${props => props.$width || '70%'};
    border-color: transparent;
    border-bottom: ${props => props.$border || 'none'};
    background-color: ${props => props.$background || 'white'};
    padding: 0em 1em;
    margin: 3px;
    font-size: 12px;
    align-self: ${props => props.$alingSelf || 'center'};
    letter-spacing: .5px;
    border-radius: ${props => props.$border || '.8em'};
    outline: 0;
`

export default function RoundedInput({
  type,
  field,
  placeholder,
  error,
  register,
  label,
  onBlur,
  $background,
  $border,
  $width,
  $alingSelf,
  $color,
  $height
}: RoundedInputProps) {
  return (
    <div className={styles.input_container} >
      <Input
        onBlurCapture={() => { onBlur([field]) }}
        {...register(field)}
        type={type}
        placeholder={placeholder ? `${placeholder}...` : ''}
        $background={$background}
        $border={$border}
        $width={$width}
        $alingSelf={$alingSelf}
        $color={$color}
        $height={$height}
      />
      <label htmlFor={field} className={styles.form_inputLabel}><span className={error && styles.labelError_color}>{error.message ? error.message : ''}</span></label>
    </div>
  )
}
