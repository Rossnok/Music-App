import React from 'react'
import styles from './styles/roundedInput.module.css'
import styled from 'styled-components'

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
  $height?: string,
  border_style?: string
}

const Span = styled.span<{ 
  $width?: string,
  $alingSelf?: string
 }>`
  width: ${props => props.$width || '80%'};
  align-self: ${props => props.$alingSelf || 'center'};
  padding: 0em .5em;
  font-family: var(--font-roboto);
  font-weight: 700;
  font-size: 14px;
`

const Label = styled.label<{ $width?: string }>`
  height: 14px;
  font-size: 14px;
  font-weight: 600;
  letter-spacing: .8px;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;    
  color: var(--error-text);
  padding: 0em 0em 0em 1em;
  align-self: center;
  width: ${props => props.$width || '70%'};
  font-family: var(--font-roboto);
`

const Input = styled.input<RoundedInputProps>`
    color: ${props => props.$color || 'black'};
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    height: ${props => props.$height || "40px"};
    width: ${props => props.$width || '70%'};
    border: ${props => props.border_style || '3px solid transparent'};
    background-color: ${props => props.$background || 'white'};
    padding: 0em 1em;
    margin: 3px;
    font-size: 14px;
    font-weight: 600;
    font-family: var(--font-roboto);
    align-self: ${props => props.$alingSelf || 'center'};
    letter-spacing: .5px;
    border-radius: ${props => props.$border || '.8em'};
    outline: 0;

  &:focus {
   border: 3px solid var(--input-hover)
 }
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
  $height,
  border_style
}: RoundedInputProps) {
  return (
    <div className={styles.input_container} >
      {label &&
        <Span $width={$width} $alingSelf={$alingSelf}>{label}</Span>
      }
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
        border_style={border_style}
      />
      <Label $width={$width} htmlFor={field}><span className={error && styles.labelError_color}>{error.message ? error.message : ''}</span></Label>
    </div>
  )
}
