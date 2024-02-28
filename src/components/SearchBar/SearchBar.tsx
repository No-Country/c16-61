'use client'

import React, { useState } from 'react'
import Form from 'react-bootstrap/Form'
import InputGroup from 'react-bootstrap/InputGroup'
import styles from './SearchBar.module.css'
import { SearchResult } from '@/components/SearchResult/SearchResult'

export function SearchBar({ testArray }): JSX.Element {
  const [showResults, setShowResults] = useState(false)
  const [showFilter, setShowFilter] = useState(true)

  const handleSearch = (event) => {
    event.preventDefault()
    setShowResults(true) // Show search results when the button is clicked
  }

  const clearSearch = (event) => {
    event.preventDefault()
    setShowResults(false) // Hide search results when the button is clicked
  }

  const handleFilter = (event) => {
    event.preventDefault()
    setShowFilter(!showFilter) // Cambia el estado actual del filtro cuando el boton es clickeado
  }

  return (
    <section>
      <form className={styles.searchForm}>
        <div>
          {
            showResults &&
            <button className={styles.searchButton} onClick={clearSearch} type="button"><img src="https://firebasestorage.googleapis.com/v0/b/imomubiales1.appspot.com/o/x.svg?alt=media&token=bbb85fd1-6c06-469a-9418-7d282f51432b" alt="borrar" /></button>
          }
          <input
            type="text"
            className={styles.searchInput}
          />
          <button className={styles.searchButton} onClick={handleSearch} type="submit"><img src="https://firebasestorage.googleapis.com/v0/b/imomubiales1.appspot.com/o/search.svg?alt=media&token=76097aa9-40ed-434c-8c76-39952facce6e" alt="buscar" /></button>
          <button className={styles.searchButton} onClick={handleFilter} type="submit"><img src="https://firebasestorage.googleapis.com/v0/b/imomubiales1.appspot.com/o/filter2.svg?alt=media&token=6086bfba-b745-47ae-8836-b73520cc57b8" alt="filtrar" /></button>
        </div>

        {
          showFilter && (
            <div className={styles.filters} >

              <InputGroup className="mb-3">
                <InputGroup.Text id="basic-addon1"><img src="https://firebasestorage.googleapis.com/v0/b/imomubiales1.appspot.com/o/bathfilled.svg?alt=media&token=78b7c5a4-289c-4c87-b0e4-f395f3c31add" alt="baño" /> </InputGroup.Text>
                <Form.Control

                  min={1}
                  max={5}
                  aria-label="Habtiaciones"
                  aria-describedby="basic-addon1"
                  type='number'
                />
              </InputGroup>
              <InputGroup className="mb-3">
                <InputGroup.Text id="basic-addon1"><img src="https://firebasestorage.googleapis.com/v0/b/imomubiales1.appspot.com/o/bedfilled.svg?alt=media&token=81a6b35c-fc50-45be-a04f-c77da8110356" alt="habitaciones" /></InputGroup.Text>
                <Form.Control

                  min={1}
                  max={10}
                  aria-label="Baños"
                  aria-describedby="cantidad-baños"
                  type='number'
                />
              </InputGroup>

              <InputGroup className="mb-3">
                <InputGroup.Text> <img src="https://firebasestorage.googleapis.com/v0/b/imomubiales1.appspot.com/o/starfilled.svg?alt=media&token=893b2383-fd89-4cf6-b492-9011ff74485e" alt="rating" /> </InputGroup.Text>
                <Form.Control
                  min={1}
                  max={5}
                  type='number'
                  aria-label="rating" />
              </InputGroup>

              <InputGroup className="mb-3">
                <InputGroup.Text>$</InputGroup.Text>
                <Form.Control
                  min={5000}
                  max={100000000} type='number'
                  aria-label="costo" />
              </InputGroup>
            </div>
          )
        }
      </form>
      {showResults && <SearchResult testArray={testArray} />}
    </section>
  )
}
