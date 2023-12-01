import { Stack } from "@mui/material"
import styled from "styled-components"

const Input = styled.input`
    width: 60%;
    height: 28px;
    placeholder: search...;
    background: #D9D9D9;
    border: none;
    border-radius: .5em;
    outline: 0;
    padding: 0em 0em 0em .5em;
    letter-spacing: .8px;
    font-family: var(--font-roboto);
    font-weight: 600;
    box-shadow: 1px 1px 2px gray;

    &:focus {
        border: 2px solid var(--input-hover)
    }
`
export default function SearchInput() {
    return (
        <Stack direction={'row'} gap={1} flexWrap={'wrap'} alignItems={'center'}>
            <span>Buscar</span>
            <Input />
        </Stack>
    )
}
