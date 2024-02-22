"use client"

import styles from './SearchBar.module.css';
import { SearchResult } from "@/components/SearchResult/SearchResult";
import React, {useState} from 'react';

export function SearchBar({testArray}): JSX.Element {
  
  const [showResults, setShowResults] = useState(false);

  const handleSearch = (event) => {
    event.preventDefault();
    setShowResults(true); // Show search results when the button is clicked
  };

  const clearSearch = (event) => {
    event.preventDefault();
    setShowResults(false); // Hide search results when the button is clicked
  };

  return (
    <section>
      <form className={styles.searchForm}>
        <input
          type="text"
          className={styles.searchInput}
        />
        <div className={styles.buttons} >
          <button className={styles.searchButton} onClick={handleSearch} type="submit">Buscar</button>
          <button className={styles.searchButton} onClick={clearSearch} type="button">Clear</button>
        </div>
      </form>
      {showResults && <SearchResult testArray={testArray} />}
    </section>
  );
}
