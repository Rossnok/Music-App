import ImagesContainer from "../AlbumsContainer/index"
import HomeNavBar from "../HomeNavBar"
import styles from './styles/homeComponent.module.css'

export default function HomeComponent() {
    return (
        <div className={styles.home_container}>
            <HomeNavBar />
            <ImagesContainer />
        </div>
    )
}
