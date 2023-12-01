import { Stack} from "@mui/material"
import ImagesContainer from "../ImagesContainer/index"
import MainMenu from "../MainMenu"
import HomeNavBar from "../HomeNavBar"

export default function HomeComponent() {
    return (
        <Stack width={'100%'} minWidth={'300px'} alignItems={'center'} height={'100vh'}>
           {/*<ImagesContainer />*/} 
          <HomeNavBar/>
        </Stack>
    )
}
