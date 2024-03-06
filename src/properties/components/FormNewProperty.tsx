'use client'

import Link from 'next/link'
import { useFormState } from 'react-dom'
import { createProperty } from '@/properties'

export function FormNewProperty() {
  const [state, dispatch] = useFormState(createProperty, undefined)

  return (
    <>
      <form action={dispatch} style={{ display: 'flex', flexDirection: 'column' }}>
        <label htmlFor="name">Nombre de la propiedad:</label>
        <input
          className="px-5 py-2 border bg-gray-200 rounded mb-5"
          type="text"
          name="name"
        />

        <label htmlFor="coveredArea">Area de la propiedad:</label>
        <input
          className="px-5 py-2 border bg-gray-200 rounded mb-5"
          type="number"
          name="coveredArea"
        />

        <label htmlFor="totalLandArea">Area total la propiedad:</label>
        <input
          className="px-5 py-2 border bg-gray-200 rounded mb-5"
          type="number"
          name="totalLandArea"
        />

        <label htmlFor="bathrooms">Número de baños:</label>
        <input
          className="px-5 py-2 border bg-gray-200 rounded mb-5"
          type="number"
          name="bathrooms"
        />

        <label htmlFor="bedrooms">Número de habitaciones:</label>
        <input
          className="px-5 py-2 border bg-gray-200 rounded mb-5"
          type="number"
          name="bedrooms"
        />

        <label htmlFor="price">Precio:</label>
        <input
          className="px-5 py-2 border bg-gray-200 rounded mb-5"
          type="number"
          name="price"
        />

        {/* amenities */}
        <fieldset>
          <legend>Comodidades:</legend>
          <div>
            <input type="checkbox" id="escuela" name="amenities" value="escuela" />
            <label htmlFor="escuela">Escuela</label>
          </div>
          <div>
            <input type="checkbox" id="gimnasio" name="amenities" value="Gimnasio" />
            <label htmlFor="gimnasio">Gimnasio</label>
          </div>
          <div>
            <input type="checkbox" id="seguridad" name="amenities" value="Seguridad" />
            <label htmlFor="seguridad">Seguridad</label>
          </div>
        </fieldset>

        {/* services */}
        <fieldset>
          <legend>Servicios:</legend>
          <div>
            <input type="checkbox" id="agua" name="services" value="Agua" />
            <label htmlFor="agua">Agua</label>
          </div>
          <div>
            <input type="checkbox" id="gas" name="services" value="Gas" />
            <label htmlFor="gas">Gas</label>
          </div>
          <div>
            <input type="checkbox" id="internet" name="services" value="Internet" />
            <label htmlFor="internet">Internet</label>
          </div>
        </fieldset>

        {/* nearbyPlaces */}
        <fieldset>
          <legend>Lugares cercanos:</legend>
          <div>
            <input type="checkbox" id="escuela" name="nearbyPlaces" value="Escuela Primaria" />
            <label htmlFor="escuela">Escuela Primaria</label>
          </div>
          <div>
            <input type="checkbox" id="estacion" name="nearbyPlaces" value="Estación de Servicio" />
            <label htmlFor="estacion">Estación de Servicio</label>
          </div>
          <div>
            <input type="checkbox" id="parque" name="nearbyPlaces" value="Parque Central" />
            <label htmlFor="parque">Parque Central</label>
          </div>
        </fieldset>

        {/* nearbyBusStops */}
        <fieldset>
          <legend>Paradas de autobus:</legend>
          <div>
            <input type="checkbox" id="paradaEscuela" name="nearbyBusStops" value="Parada de Escuela" />
            <label htmlFor="paradaEscuela">Parada de Escuela</label>
          </div>
          <div>
            <input type="checkbox" id="paradaCentro" name="nearbyBusStops" value="Parada de Centro" />
            <label htmlFor="paradaCentro">Parada de Centro</label>
          </div>
        </fieldset>

        {/* buttons */}
        <div className='mt-6 flex justify-end gap-4'>
          <Link
            href='/dashboard'
          >
            Cancelar
          </Link>
          <button >Crear propiedad</button>
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
