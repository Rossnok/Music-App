import { Stack } from '@mui/material'
import Image from 'next/image'
import styles from './styles/HomeNavBar.module.css'
import ActiveButton from '../common/ActiveButton'
import SearchInput from '../common/SearchInput'

export default function HomeNavBar() {
  return (
    <Stack direction={'row'} flexWrap={'wrap'} padding={'.5em 0em 0em 0em'} gap={2} width={'100%'}>
      <Stack width={'10%'} padding={'0em 0em 0em 1em'} minWidth={'fit-content'}>
        <div className={styles.menu_item_container}>
          <Image
            alt='Icono de menu'
            src={'/images/mainMenuIcons/hamburger_icon_dark.svg'}
            width={30}
            height={30}
          />
          <span className={styles.menu_text}>Menu</span>
        </div>
      </Stack>
      <div className={styles.filters_container}>
        <ActiveButton
          $name='Artista'
        />
        <ActiveButton
          $name='Año'
        />
        <ActiveButton
          $name='Genero'
        />
        <ActiveButton
          $name='Calificacion'
        />
      </div>
      <div className={styles.search_container}>
        <SearchInput />
      </div>
    </Stack>
  )
}
