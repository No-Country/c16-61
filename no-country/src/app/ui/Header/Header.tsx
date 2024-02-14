import styles from './Header.module.css'
import Image from 'next/image'
import instagramLogo from "../../../../images/instagram.svg"
export default function Header() {

    return (
        <nav className={styles.navbar} >
            <div>
                <Image src={instagramLogo} alt=""  priority={true}/>
                <p>Compralo</p>
            </div>

            <div className={styles.buttonNew} >
                <button>Ingresar</button>
            </div>
        </nav>
    )

}