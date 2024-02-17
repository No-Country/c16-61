import FeaturedProducts from "@/components/FeaturedProducts/FeaturedProducts"
import {SearchBar} from "@/components/SearchBar/SearchBar"
import styles from "./page.module.css"

export default function HomePage() {
  return (
    <main>
      <section className={styles.title} >
        <h1>Inmobiliaria</h1>
        <SearchBar />
      </section>
      <FeaturedProducts />
    </main>

  )
}