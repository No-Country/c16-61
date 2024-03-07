'use client'

import Image from 'next/image'
import Link from 'next/link'
import styles from './Footer.module.css'
import { LogoutButton } from '..'
import instagramLogo from '../../../public/images/instagram.svg'
import twitterLogo from '../../../public/images/twitter.svg'

export async function Footer() {
  const user = null

  return (
    <footer className={styles.footer} >
      <div className={styles.Conteiner} >
        <div className={styles.infOptions} >
          <p><Link href={'/search'} className={styles.link}>Buscar</Link></p>
          {
            user &&
            <p><Link href={'/profile'} style={{ color: 'white' }} >Mi perfil</Link></p>
          }
          <LogoutButton />
        </div>

        <div className={styles.redes} >
          <h3>Redes</h3>
          <div className={styles.twitter} >
            <Image src={twitterLogo} alt='redes' width={25} height={25} priority={true} />
            <p className={styles.link} onClick={() => { window.open('https://twitter.com') }}>Twitter</p>
          </div>
          <div className={styles.instagram} >
            <Image src={instagramLogo} alt='redes' width={25} height={25} priority={true} />
            <p className={styles.link} onClick={() => { window.open('https://instagram.com') }}>Instagram</p>
          </div>
        </div>
      </div>
      <div className={styles.grupo2}>
        <small>&copy; 2024 <b>No Country</b> | C16-61</small>
      </div>
    </footer>
  )
}
