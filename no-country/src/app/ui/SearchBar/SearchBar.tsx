import styles from './SearchBar.module.css'

export default function SearchBar() {
    return (
        <section>
            <form className={styles.searchForm} >
                <input type="text" />
                <input type="submit" />
            </form>
        </section>
    )
}