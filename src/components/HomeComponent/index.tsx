import { Stack, Typography } from "@mui/material";
import Image from "next/image";
import styles from './styles/homeComponent.module.css'
import CarrucelCard from "../AlbumsCarrucel/CarrucelCard";
import AlbumsCarrucel from "../AlbumsCarrucel";

export default function HomeComponent() {
    return (
        <>
            <Stack width={'100vh'} minWidth={'300px'}padding={'.8em'} height={'100vh'}>
                <AlbumsCarrucel />
            </Stack>
        </>
    )
}
