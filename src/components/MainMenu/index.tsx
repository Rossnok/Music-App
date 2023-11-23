import React from 'react'
import { Button, Stack, Typography, useMediaQuery, useTheme } from '@mui/material'
import styles from './styles/navBar.module.css'
import Image from 'next/image'
import { useRouter } from 'next/router';

export default function MainMenu() {
    const theme = useTheme();
    const ismovil = useMediaQuery(theme.breakpoints.down('sm'));
    const router  = useRouter();

    const toAlbumForm = () => {
        router.push('/newAlbum');
    }
    const toHome = () => {
        router.push('/');
    }

    return (
        <Stack>
            {!ismovil &&
                <Stack bgcolor={'#F2B705'} direction={'column'} padding={'1em'} height={'100vh'} gap={2} width={'fit-content'}>
                    <Stack direction={'row'} gap={3} alignItems={'center'}>
                        <Image
                            src={'/images/musica.png'}
                            width={40}
                            height={40}
                            alt='Company icon'
                        />
                        <Typography className={styles.rainbow_text} variant='h5'>RossMusic</Typography>
                    </Stack>
                    <Stack className={styles.links_container}>
                        <li onClick={toHome}>Home</li>
                        <li onClick={toAlbumForm}>Nuevo Album</li>
                    </Stack>
                    <Stack position={'relative'} direction={'row'} gap={'1em'} padding={'0em 2em 0em 0em'}>
                        <Button>Sign in</Button>
                        <Button>Login</Button>
                    </Stack>
                </Stack>
            }
            {ismovil &&
                <Stack className={styles.links_container}>

                </Stack>
            }
        </Stack>

    )
}
