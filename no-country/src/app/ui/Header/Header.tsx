import styles from './Header.module.css'


export default function Header() {

    return (
        <nav className={styles.navbar} >
            <div>
                <img src="" alt="" />
                <p>Compralo</p>
            </div>

            <div className={styles.buttonNew} >
                <button>Ingresar</button>
            </div>
        </nav>
    )

}