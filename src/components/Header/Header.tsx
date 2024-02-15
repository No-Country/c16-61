import styles from './Header.module.css'
import { SearchBar } from '@/components'

export function Header() {
  return (
    <section className={styles.conteiner} >
      <nav className={styles.navbar} >
        <div>
          <img src="" alt="" />
          <p>Compralo</p>
        </div>

        <div className={styles.buttonNew} >
          <button>Ingresar</button>
        </div>
      </nav>
      <header className={styles.title} >
        <h1>Inmobiliaria</h1>
        <SearchBar />
      </header>
    </section>
  )
}
