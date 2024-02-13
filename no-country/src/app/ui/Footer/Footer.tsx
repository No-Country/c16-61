import styles from './Footer.module.css'

export default function Footer() {
    return (
        <footer className={styles.foot} >
           <div>
            <p>Login</p>
            <p>Mi perfil</p>
            <p>Buscar</p>
            <p>Logout</p>
            <p>2022 apx</p>
           </div>

        <div className={styles.redes} >
            <h3>Redes</h3>
            <div>
            <img src="" alt="" />
            <p>My E-commerce</p>
            </div>
            <div>
            <img src="" alt="" />
            <p>My E-commerce</p>
            </div>
        </div>

        </footer>
    )
}