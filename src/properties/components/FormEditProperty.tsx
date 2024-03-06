'use client'

import { type Property } from '@prisma/client'
import Link from 'next/link'
import { useFormState } from 'react-dom'
import styles from './formEditProperty.module.css'
import { type UpdateProperty, editProperty } from '@/properties'

interface EditPropertyProps {
  property: UpdateProperty
}

export function FormEditProperty({ property }: EditPropertyProps) {
  const editPropertyWithId = editProperty.bind(null, property.id)
  const [state, dispatch] = useFormState(editPropertyWithId, undefined)

  const isChecked = (propertyName: keyof Property, value: string) => {
    return property[propertyName]?.includes(value)
  }

  return (
    <>
      <form action={dispatch} className={styles.form}>
        <label htmlFor="name" className={styles.label}>Nombre de la propiedad:</label>
        <input
          type="text"
          name="name"
          defaultValue={property.name} className={styles.input}
        />

        <label htmlFor="coveredArea" className={styles.label}>Area de la propiedad:</label>
        <input
          type="number"
          name="coveredArea"
          defaultValue={property.coveredArea} className={styles.input}
        />

        <label htmlFor="totalLandArea" className={styles.label}>Area total la propiedad:</label>
        <input
          type="number"
          name="totalLandArea"
          defaultValue={property.totalLandArea} className={styles.input}
        />

        <label htmlFor="bathrooms" className={styles.label}>Número de baños:</label>
        <input
          type="number"
          name="bathrooms"
          defaultValue={property.bathrooms} className={styles.input}
        />

        <label htmlFor="bedrooms" className={styles.label}>Número de habitaciones:</label>
        <input
          type="number"
          name="bedrooms"
          defaultValue={property.bedrooms} className={styles.input}
        />

        <label htmlFor="price" className={styles.label}>Precio:</label>
        <input
          type="number"
          name="price"
          defaultValue={property.price} className={styles.input}
        />

        {/* amenities */}
        <fieldset className={styles.fieldset}>
          <legend className={styles.label}>Comodidades:</legend>
          <div className={styles.checkbox}>
            <input
              type="checkbox"
              id="escuela"
              name="amenities"
              value="Escuela"
              defaultChecked={isChecked('amenities', 'escuela')}
            />
            <label htmlFor="escuela">Escuela</label>
          </div>
          <div className={styles.checkbox}>
            <input type="checkbox" id="gimnasio" name="amenities" value="Gimnasio" />
            <label htmlFor="gimnasio">Gimnasio</label>
          </div>
          <div className={styles.checkbox}>
            <input type="checkbox" id="seguridad" name="amenities" value="Seguridad" />
            <label htmlFor="seguridad">Seguridad</label>
          </div>
        </fieldset>

        {/* services */}
        <fieldset className={styles.fieldset}>
          <legend className={styles.label}>Servicios:</legend>
          <div className={styles.checkbox}>
          <input
              type="checkbox"
              id="agua"
              name="services"
              value="Agua"
              defaultChecked={isChecked('services', 'Agua')}
            />
            <label htmlFor="agua">Agua</label>
          </div>
          <div className={styles.checkbox}>
            <input
              type="checkbox"
              id="gas"
              name="services"
              value="Gas Natural"
              defaultChecked={isChecked('services', 'Gas Natural')}
            />
            <label htmlFor="gas">Gas</label>
          </div>
          <div className={styles.checkbox}>
            <input
              type="checkbox"
              id="internet"
              name="services"
              value="Internet"
              defaultChecked={isChecked('services', 'Internet')}
            />
            <label htmlFor="internet">Internet</label>
          </div>
        </fieldset>

        {/* nearbyPlaces */}
        <fieldset className={styles.fieldset}>
          <legend className={styles.label}>Lugares cercanos:</legend>
          <div className={styles.checkbox}>
            <input
              type="checkbox"
              id="escuela"
              name="nearbyPlaces"
              value="Escuela Primaria"
              defaultChecked={isChecked('nearbyPlaces', 'Escuela Primaria')}
            />
            <label htmlFor="escuela">Escuela Primaria</label>
          </div>
          <div className={styles.checkbox}>
            <input
              type="checkbox"
              id="estacion"
              name="nearbyPlaces"
              value="Estación de Servicio"
              defaultChecked
            />
            <label htmlFor="estacion">Estación de Servicio</label>
          </div>
          <div className={styles.checkbox}>
            <input
              type="checkbox"
              id="parque"
              name="nearbyPlaces"
              value="Parque Central"
              defaultChecked
            />
            <label htmlFor="parque">Parque Central</label>
          </div>
        </fieldset>

        {/* nearbyBusStops */}
        <fieldset className={styles.fieldset}>
          <legend className={styles.label}>Paradas de autobus:</legend>
          <div className={styles.checkbox}>
            <input
              type="checkbox"
              id="paradaEscuela"
              name="nearbyBusStops"
              value="Parada de Escuela"
              defaultChecked={isChecked('nearbyBusStops', 'Parada de Escuela')}
            />
            <label htmlFor="paradaEscuela">Parada de Escuela</label>
          </div>
          <div className={styles.checkbox}>
            <input
              type="checkbox"
              id="paradaCentro"
              name="nearbyBusStops"
              value="Parada de Centro"
              defaultChecked={isChecked('nearbyBusStops', 'Parada de Centro')}
            />
            <label htmlFor="paradaCentro">Parada de Centro</label>
          </div>
        </fieldset>

        {/* buttons */}
        <div className={styles.fieldset}>
          <Link
            href='/dashboard'
          >
          <button className={styles.cancelButton}>Cancelar</button></Link>
          <button className={styles.createButton}>Actualizar propiedad</button>
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
