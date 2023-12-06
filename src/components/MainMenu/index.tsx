import React from 'react'
import { Button, Stack, useMediaQuery, useTheme } from '@mui/material'
import styles from './styles/MainMenu.module.css'
import Image from 'next/image'
import { useRouter } from 'next/router';

export default function MainMenu() {
    const theme = useTheme();
    const ismovil = useMediaQuery(theme.breakpoints.down('sm'));
    const router = useRouter();

    const toAlbumForm = () => {
        router.push('/newAlbum');
    }
    const toHome = () => {
        router.push('/');
    }

    return (
        <Stack width={'15%'}>
            {!ismovil &&
                <>
                    <div className={styles.menu_item_container}>
                        <Image
                            alt='Icono de menu'
                            src={'/images/mainMenuIcons/hamburger_icon.svg'}
                            width={30}
                            height={30}
                        />
                        <span className={styles.menu_text}>Menu</span>
                    </div>
                    <Stack bgcolor={'#D8D8D8'} direction={'column'} padding={'0rem 1rem 0rem 1rem'} height={'94vh'} gap={2}>
                        <Stack direction={'row'} gap={3} alignItems={'center'}>
                        </Stack>
                        <div className={styles.links_container}>
                            <li onClick={toHome}>
                                <Image
                                    alt='Inicio icon'
                                    src={'/images/mainMenuIcons/home_icon.png'}
                                    width={30}
                                    height={30}
                                />
                                <span className={styles.li_text}>Inicio</span>
                            </li>
                            <li onClick={toHome}>
                                <Image
                                    alt='Inicio icon'
                                    src={'/images/mainMenuIcons/suggestions_icon.png'}
                                    width={30}
                                    height={30}
                                />
                                <span className={styles.li_text}>Sugerencias</span>
                            </li>
                            <li onClick={toHome}>
                                <Image
                                    alt='Inicio icon'
                                    src={'/images/mainMenuIcons/about_icon.png'}
                                    width={30}
                                    height={30}
                                />
                                <span className={styles.li_text}>Acerca de</span>
                            </li>
                        </div>
                        <div className={styles.logout_container}>
                        <li onClick={toHome}>
                                <Image
                                    alt='Inicio icon'
                                    src={'/images/mainMenuIcons/logout_icon.png'}
                                    width={30}
                                    height={30}
                                />
                                <span className={styles.li_text}>LogOut</span>
                            </li>
                        </div>
                    </Stack>
                </>
            }
            {ismovil &&
                <Stack className={styles.links_container}>

                </Stack>
            }
        </Stack>


    )
}
