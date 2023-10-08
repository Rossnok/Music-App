import Carousel from 'react-material-ui-carousel'
import styles from './styles/carrucel.module.css'
import { proccessData } from './ProccessDataForCarrucel'

export default function AlbumsCarrucel() {
  return (
    <Carousel
      autoPlay={true}
      interval={1500}
      animation='slide'
      duration={500}
      swipe={true}
      stopAutoPlayOnHover={true}
      className={styles.carrucel}
    >
      {
       //proccessData()
      }
    </Carousel>
  )
}
