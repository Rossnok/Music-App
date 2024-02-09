import data from '../../../helpers/data'
import { useRouter } from 'next/router'
import styles from './styles/Home.module.css'
import HeaderContainer from '../HeaderContainer';
import { Stack } from '@mui/material';
import Music from '../Music';

export default function Home() {
    const router = useRouter();

    const { albumsData } = data()

    const onClick = (data: any) => {

    }

    return (
        <div className={styles.container}>
            <div className={styles.box1}>
                <HeaderContainer
                    src='/images/backgroundImages/header_image.jpg'
                    text='Disfruta de RossMusic, donde buscamos que nuetros usuarios tengan una gran experiencia para el disfrute de
                          diferentes generos musicales, el lugar donde puedes descubrir nuevas pistas o revivir los gustos de diferentes epocas de tu vida'
                />
            </div>
            <div className={styles.box2}>
                <Stack width={'50%'} height={'100%'}>
                    <Music
                        src='/images/backgroundImages/Music_background.jpg'
                        title='Tu Musica'
                        text='Escucha tu musica de siempre para que siga la fiesta'
                        isMusicComponent={true}
                    />
                </Stack>
                <Stack width={'50%'} height={'100%'}>
                    <Music
                        src='/images/backgroundImages/filters.jpg'
                        title='Generos Musicales'
                        text='Encuentra tu nueva cancion favorita explorando diferentes generos'
                        isMusicComponent={false}
                    />
                </Stack>
            </div>

        </div>
    )
}
