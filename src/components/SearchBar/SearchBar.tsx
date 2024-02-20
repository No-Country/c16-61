import styles from './SearchBar.module.css'
import { CustomButton } from '@/UI/button/Button'

export function SearchBar() {
  return (
    <section>
      <form className={styles.searchForm} >
        <input type="text" />
        <CustomButton onClick={() => { }} text="Buscar"></CustomButton>
      </form>
    </section>
  )
}
