'use client'

import { useState } from 'react'
import Form from 'react-bootstrap/Form'
import InputGroup from 'react-bootstrap/InputGroup'
import styles from './SearchBar.module.css'
import { SearchResult } from '@/components/SearchResult/SearchResult'

interface SearchBarProps {
  testArray: any[]
  router: any
  initialShowResults?: boolean
}

export function SearchBar({ testArray, router, initialShowResults = false }: SearchBarProps): JSX.Element {
  const [showResults, setShowResults] = useState(initialShowResults)
  const [showFilter, setShowFilter] = useState(true)

  const [arrayResults, setArrayResults] = useState([])

  const handleSearch = async (event) => {
    event.preventDefault()

    const query = event.target.search.value
    const bathrooms = event.target.bathrooms.value
    const bedrooms = event.target.bedrooms.value
    const price = event.target.price.value
    const rating = event.target.rating.value
    
    const results = await fetch(`http://localhost:3000/api/search-properties?query=${query}&bathrooms=${bathrooms}&bedrooms=${bedrooms}`)
    const resultsJson = await results.json()
    console.log("resultado fetch", resultsJson);
    
    setArrayResults(resultsJson)
    console.log("resultado state",arrayResults);
    
    
    setShowResults(true)
    setShowFilter(true)
    router.push('/search')
  }

  const clearSearch = (event) => {
    event.preventDefault()
    setShowResults(false)
  }

  const handleFilter = (event) => {
    event.preventDefault()
    setShowFilter(!showFilter)
  }

  return (
    <section>
      <form className={styles.searchForm} onSubmit={(e)=>{handleSearch(e)}}>
        <div>
          {
            showResults &&
            <button className={styles.searchButton} onClick={clearSearch} type="button"><img src="https://firebasestorage.googleapis.com/v0/b/imomubiales1.appspot.com/o/x.svg?alt=media&token=bbb85fd1-6c06-469a-9418-7d282f51432b" alt="borrar" /></button>
          }
          <input
            type="text"
            id='search'
            className={styles.searchInput}
          />
          <button className={styles.searchButton} type="submit"><img src="https://firebasestorage.googleapis.com/v0/b/imomubiales1.appspot.com/o/search.svg?alt=media&token=76097aa9-40ed-434c-8c76-39952facce6e" alt="buscar" /></button>
          <button className={styles.searchButton} onClick={handleFilter} type="button"><img src="https://firebasestorage.googleapis.com/v0/b/imomubiales1.appspot.com/o/filter2.svg?alt=media&token=6086bfba-b745-47ae-8836-b73520cc57b8" alt="filtrar" /></button>
        </div>

        {
          showFilter && (
            <div className={styles.filters} >

              <InputGroup className="mb-3">
                <InputGroup.Text id="basicaddon1"><img src="https://firebasestorage.googleapis.com/v0/b/imomubiales1.appspot.com/o/bathfilled.svg?alt=media&token=78b7c5a4-289c-4c87-b0e4-f395f3c31add" alt="baño" /> </InputGroup.Text>
                <Form.Control
                  id='bathrooms'
                  min={1}
                  max={5}
                  aria-label="Habtiaciones"
                  aria-describedby="cantidad-baños"
                  type='number'
                />
              </InputGroup>
              <InputGroup className="mb-3">
                <InputGroup.Text id="basic-addon1"><img src="https://firebasestorage.googleapis.com/v0/b/imomubiales1.appspot.com/o/bedfilled.svg?alt=media&token=81a6b35c-fc50-45be-a04f-c77da8110356" alt="habitaciones" /></InputGroup.Text>
                <Form.Control
                  id='bedrooms'
                  min={1}
                  max={10}
                  aria-label="Baños"
                  aria-describedby="cantidad-habitaciones"
                  type='number'
                />
              </InputGroup>

              <InputGroup className="mb-3">
                <InputGroup.Text> <img src="https://firebasestorage.googleapis.com/v0/b/imomubiales1.appspot.com/o/starfilled.svg?alt=media&token=893b2383-fd89-4cf6-b492-9011ff74485e" alt="rating" /> </InputGroup.Text>
                <Form.Control
                  id='rating'
                  min={1}
                  max={5}
                  type='number'
                  aria-label="rating" />
              </InputGroup>

              <InputGroup className="mb-3">
                <InputGroup.Text>$</InputGroup.Text>
                <Form.Control
                  id='price'
                  min={5000}
                  max={100000000} type='number'
                  aria-label="costo" />
              </InputGroup>
            </div>
          )
        }
      </form>
      {showResults && <SearchResult testArray={arrayResults} />}
    </section>
  )
}
