import data from '../../helpers/data'
import CarrucelCard from '../AlbumCardView'
import { useRouter } from 'next/router'
import styles from './styles/AlbumsContainer.module.css'

export default function AlbumsContainer() {
    const router = useRouter();

    const { albumsData } = data()

    const onClick = (data: any) => {
        router.push({
            pathname: '/album/index',
            query: data
        });
    }

    return (
        <div className={styles.albums_container}>
            <div className={styles.albums_cards}>
                {albumsData && albumsData.map((album, index) => {
                    return (
                        <CarrucelCard
                            key={index}
                            onClick={onClick}
                            name={album.albumName ? album.albumName : ''}
                            publication={album.year ? album.year : ''}
                            traks={album.tracks ? album.tracks : ''}
                            discografic={album.recordCompany ? album.recordCompany : ''}
                            genre={album.genre ? album.genre : ''}
                            src={album.src ? album.src : ''}
                        />
                    )
                })
                }
            </div>
        </div>
    )
}
