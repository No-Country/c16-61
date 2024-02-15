import styles from "./NavBar.module.css"
export function NavBar() {
    return (
        <nav className={styles.navbar} >
        <div className={styles.titleContainer}>
          <img src="" alt="" />
          <p className={styles.title}>Compralo</p>
        </div>

        <div className={styles.buttonNew} >
          <button>Ingresar</button>
        </div>
      </nav>
    )
  }