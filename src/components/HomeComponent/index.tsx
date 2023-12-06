import { Stack } from "@mui/material"
import ImagesContainer from "../ImagesContainer/index"
import MainMenu from "../MainMenu"
import HomeNavBar from "../HomeNavBar"

export default function HomeComponent() {
    return (
        <Stack width={'100%'} minWidth={'300px'} direction={'column'} gap={1} alignItems={'center'} justifyContent={'center'} height={'100vh'}>
            <HomeNavBar />
            <ImagesContainer />
        </Stack>
    )
}
