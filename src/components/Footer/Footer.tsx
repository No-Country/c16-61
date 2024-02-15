import Image from 'next/image'
import styles from './Footer.module.css'
import instagramLogo from '../../../public/images/instagram.svg'
import twitterLogo from '../../../public/images/twitter.svg'

export function Footer() {
  return (
    <footer className={styles.footer} >
      <div className={styles.Conteiner} >
        <div className={styles.infOptions} >
          <p>Login</p>
          <p>Mi perfil</p>
          <p>Buscar</p>
          <p>Logout</p>
          <p>©2022 LyS</p>
        </div>

        <div className={styles.redes} >
          <h3>Redes</h3>
          <div className={styles.twitter} >
            <Image src={twitterLogo} alt='redes' width={25} height={25} priority={true} />
            <p>My E-commerce</p>
          </div>
          <div className={styles.instagram} >
            <Image src={instagramLogo} alt='redes' width={25} height={25} priority={true} />
            <p>My E-commerce</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
