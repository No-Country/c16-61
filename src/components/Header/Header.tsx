import styles from './Header.module.css'
import { SearchBar } from '@/components'
import { NavBar } from '../NavBar/NavBar'

export function Header() {
  return (
    <section className={styles.conteiner} >
      <NavBar></NavBar>
    </section>
  )
}
