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
                <Stack bgcolor={'#5EC783'} direction={'row'} alignItems={'center'} gap={2} justifyContent={'space-between'}>
                    <Stack direction={'row'} gap={3} alignItems={'center'}>
                        <Image
                            src={'/images/aguacate.png'}
                            width={70}
                            height={70}
                            alt='Company icon'
                        />
                        <Typography variant='h3' fontFamily={'Helvatica'}>Empacadora Rosas</Typography>
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
