import styles from './Footer.module.css'
import Image from 'next/image'
import twitterLogo from '../../../../images/twitter.svg'
import instagramLogo from '../../../../images/instagram.svg'


export default function Footer() {
    return (
        <footer className={styles.foot} >
            <div className={styles.footConteiner} >
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