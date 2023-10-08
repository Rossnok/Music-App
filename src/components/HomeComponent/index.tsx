import { Stack, Typography } from "@mui/material"
import AlbumsCarrucel from "../AlbumsCarrucel"
import ImagesContainer from "../ImagesContainer"

export default function HomeComponent() {
    return (
        <Stack width={'100%'} minWidth={'300px'} padding={'.8em'} height={'100vh'}>
            <ImagesContainer />
        </Stack>
    )
}
