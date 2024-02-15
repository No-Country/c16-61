"use client"

import FeaturedProducts from "@/components/FeaturedProducts/FeaturedProducts"
import {SearchBar} from "@/components/SearchBar/SearchBar"
import styles from "./page.module.css"

export default function HomePage() {
  return (
    <main>
      <header className={styles.title} >
        <h1>Inmobiliaria</h1>
        <SearchBar />
      </header>
      <FeaturedProducts />
    </main>

  )
}