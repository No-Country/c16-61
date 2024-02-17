import styles from './Header.module.css'
import { NavBar } from '../NavBar/NavBar'

export function Header(): JSX.Element {
  return (
    <header className={styles.conteiner} >
      <NavBar></NavBar>
    </header>
  )
}
