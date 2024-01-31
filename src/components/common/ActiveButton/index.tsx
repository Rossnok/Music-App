import { useState } from "react"
import styled from "styled-components"

type ButtonProps = {
    $color?: string,
    $name: string
    $state?: boolean
}

const Button = styled.button<ButtonProps>`
    background: ${props => props.$state ? '#F2B9B3' : '#6d9ba683'};
    font-size: 14px;
    font-family: var(--font-roboto);
    font-weight: 500;
    border-radius: .5em;
    letter-spacing: .8px;
    border-style: none;
    padding: .5em 1em .5em 1em;
    box-shadow: 1px 1px 2px gray;
    cursor: pointer;
    transition: 300ms all;
    transform: ${props => props.$state? 'scale(1)':'scale(.95)'};

    &:hover{
        transform: scale(1);
    }
    
`

export default function ActiveButton({ $name, $color }: ButtonProps) {
    const [buttonState, setButtonState] = useState<boolean>(false)

    const onclickButton = () => {
        setButtonState(!buttonState)
    }
    return (
        <Button $state={buttonState} onClick={onclickButton} $name={$name}>{$name}</Button>
    )
}
