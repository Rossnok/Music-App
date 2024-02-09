import Image from 'next/image'
import styles from './styles/HomeNavBar.module.css'
import signOut from 'next-auth'
import logic from './navBarLogic'


export default function HomeNavBar() {
  const {
    onClickSingOut
  } = logic()

  return (
    <div className={styles.container}>  
          <Image
            alt='Icono de menu'
            src={'/images/navIcons/hamburger_icon.svg'}
            width={30}
            height={30}
            quality={30}
          />        
          <div className={styles.sing_out_container} onClick={onClickSingOut}>
          <Image
            alt='Icono de menu'
            src={'/images/navIcons/signout.svg'}
            width={30}
            height={30}
            quality={100}
          />
          <span>SingOut</span>
          </div>
    </div>
  )
}
