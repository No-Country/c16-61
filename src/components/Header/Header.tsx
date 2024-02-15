import styles from './Header.module.css'
import { SearchBar } from '@/components'
import { NavBar } from '../NavBar/NavBar'

export function Header() {
  return (
    <section className={styles.conteiner} >
      <NavBar></NavBar>
      <header className={styles.title} >
        <h1>Inmobiliaria</h1>
        <SearchBar />
      </header>
    </section>
  )
}
