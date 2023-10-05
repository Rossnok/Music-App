import React from 'react'
import { Button, Stack, Typography, useMediaQuery, useTheme } from '@mui/material'
import styles from './styles/navBar.module.css'
import Image from 'next/image'

export default function NavBar() {
    const theme = useTheme();
    const ismovil = useMediaQuery(theme.breakpoints.down('sm'));

    return (
        <Stack>
            {!ismovil &&
                <Stack bgcolor={'#18003B'} direction={'column'} padding={'1em'} height={'100vh'} gap={2} width={'fit-content'}>
                    <Stack direction={'row'} gap={3} alignItems={'center'}>
                        <Image
                            src={'/images/musica.png'}
                            width={70}
                            height={70}
                            alt='Company icon'
                        />
                        <Typography className={styles.rainbow_text} variant='h4'>RossMusic</Typography>
                    </Stack>
                    <Stack className={styles.links_container}>
                        <li>Home</li>
                        <li>Registro</li>
                        <li>Procesos</li>
                    </Stack>
                    <Stack direction={'row'} gap={'2em'} padding={'0em 2em 0em 0em'}>
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
