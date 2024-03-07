'use client'

import Link from 'next/link'
import { useFormState } from 'react-dom'
import styles from './formNewProperty.module.css'
import { createProperty } from '@/properties'

export function FormNewProperty() {
  const [state, dispatch] = useFormState(createProperty, undefined)

  return (
    <>
      <form action={dispatch} className={styles.form}>
        <label htmlFor="name" className={styles.label}>Nombre de la propiedad:</label>
        <input type="text" name="name" className={styles.input} />
        <label htmlFor="coveredArea" className={styles.label}>Area de la propiedad:</label>
        <input type="number" name="coveredArea" className={styles.input} />
        <label htmlFor="totalLandArea" className={styles.label}>Area total la propiedad:</label>
        <input type="number" name="totalLandArea" className={styles.input} />
        <label htmlFor="bathrooms" className={styles.label}>Número de baños:</label>
        <input type="number" name="bathrooms" className={styles.input} />
        <label htmlFor="bedrooms" className={styles.label}>Número de habitaciones:</label>
        <input type="number" name="bedrooms" className={styles.input} />
        <label htmlFor="price" className={styles.label}>Precio:</label>
        <input type="number" name="price" className={styles.input} />

        <div className={styles.fieldsets}>
          {/* amenities */}
        <fieldset className={styles.fieldset}>
          <legend className={styles.label}>Comodidades:</legend>
          <div className={styles.checkbox}>
            <input type="checkbox" id="escuela" name="amenities" value="escuela"/>
            <label htmlFor="escuela">Escuela</label>
          </div>
          <div className={styles.checkbox}>
            <input type="checkbox" id="gimnasio" name="amenities" value="Gimnasio"/>
            <label htmlFor="gimnasio">Gimnasio</label>
          </div>
          <div className={styles.checkbox}>
            <input type="checkbox" id="seguridad" name="amenities" value="Seguridad"/>
            <label htmlFor="seguridad">Seguridad</label>
          </div>
        </fieldset>

        {/* services */}
        <fieldset className={styles.fieldset}>
          <legend className={styles.label}>Servicios:</legend>
          <div className={styles.checkbox}>
            <input type="checkbox" id="agua" name="services" value="Agua"/>
            <label htmlFor="agua">Agua</label>
          </div>
          <div className={styles.checkbox}>
            <input type="checkbox" id="gas" name="services" value="Gas"/>
            <label htmlFor="gas">Gas</label>
          </div>
          <div className={styles.checkbox}>
            <input type="checkbox" id="internet" name="services" value="Internet"/>
            <label htmlFor="internet">Internet</label>
          </div>
        </fieldset>

        {/* nearbyPlaces */}
        <fieldset className={styles.fieldset}>
          <legend className={styles.label}>Lugares cercanos:</legend>
          <div className={styles.checkbox}>
            <input type="checkbox" id="escuela" name="nearbyPlaces" value="Escuela Primaria"/>
            <label htmlFor="escuela">Escuela Primaria</label>
          </div>
          <div className={styles.checkbox}>
            <input type="checkbox" id="estacion" name="nearbyPlaces" value="Estación de Servicio"/>
            <label htmlFor="estacion">Estación de Servicio</label>
          </div>
          <div className={styles.checkbox}>
            <input type="checkbox" id="parque" name="nearbyPlaces" value="Parque Central"/>
            <label htmlFor="parque">Parque Central</label>
          </div>
        </fieldset>

        {/* nearbyBusStops */}
        <fieldset className={styles.fieldset}>
          <legend className={styles.label}>Paradas de autobus:</legend>
          <div className={styles.checkbox}>
            <input type="checkbox" id="paradaEscuela" name="nearbyBusStops" value="Parada de Escuela"/>
            <label htmlFor="paradaEscuela">Parada de Escuela</label>
          </div>
          <div className={styles.checkbox}>
            <input type="checkbox" id="paradaCentro" name="nearbyBusStops" value="Parada de Centro"/>
            <label htmlFor="paradaCentro">Parada de Centro</label>
          </div>
        </fieldset>
        </div>

        {/* buttons */}
        <div>
          <Link
            href='/dashboard'
          >
          <button className={styles.cancelButton}>Cancelar</button></Link>
          <button className={styles.createButton}>Crear propiedad</button>
        </div>
      </form>
      {
        state && (
          <div>
            {state}
          </div>
        )
      }
    </>
  )
}
