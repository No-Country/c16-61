'use client'

import { type Property } from '@prisma/client'
import Link from 'next/link'
import { useFormState } from 'react-dom'
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
      <form action={dispatch} style={{ display: 'flex', flexDirection: 'column' }}>
        <label htmlFor="name">Nombre de la propiedad:</label>
        <input
          type="text"
          name="name"
          defaultValue={property.name}
        />

        <label htmlFor="coveredArea">Area de la propiedad:</label>
        <input
          type="number"
          name="coveredArea"
          defaultValue={property.coveredArea}
        />

        <label htmlFor="totalLandArea">Area total la propiedad:</label>
        <input
          type="number"
          name="totalLandArea"
          defaultValue={property.totalLandArea}
        />

        <label htmlFor="bathrooms">Número de baños:</label>
        <input
          type="number"
          name="bathrooms"
          defaultValue={property.bathrooms}
        />

        <label htmlFor="bedrooms">Número de habitaciones:</label>
        <input
          type="number"
          name="bedrooms"
          defaultValue={property.bedrooms}
        />

        <label htmlFor="price">Precio:</label>
        <input
          type="number"
          name="price"
          defaultValue={property.price}
        />

        {/* amenities */}
        <fieldset>
          <legend>Comodidades:</legend>
          <div>
            <input
              type="checkbox"
              id="escuela"
              name="amenities"
              value="Escuela"
              defaultChecked={isChecked('amenities', 'escuela')}
            />
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
            <input
              type="checkbox"
              id="agua"
              name="services"
              value="Agua"
              defaultChecked={isChecked('services', 'Agua')}
            />
            <label htmlFor="agua">Agua</label>
          </div>
          <div>
            <input
              type="checkbox"
              id="gas"
              name="services"
              value="Gas Natural"
              defaultChecked={isChecked('services', 'Gas Natural')}
            />
            <label htmlFor="gas">Gas</label>
          </div>
          <div>
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
        <fieldset>
          <legend>Lugares cercanos:</legend>
          <div>
            <input
              type="checkbox"
              id="escuela"
              name="nearbyPlaces"
              value="Escuela Primaria"
              defaultChecked={isChecked('nearbyPlaces', 'Escuela Primaria')}
            />
            <label htmlFor="escuela">Escuela Primaria</label>
          </div>
          <div>
            <input
              type="checkbox"
              id="estacion"
              name="nearbyPlaces"
              value="Estación de Servicio"
              defaultChecked
            />
            <label htmlFor="estacion">Estación de Servicio</label>
          </div>
          <div>
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
        <fieldset>
          <legend>Paradas de autobus:</legend>
          <div>
            <input
              type="checkbox"
              id="paradaEscuela"
              name="nearbyBusStops"
              value="Parada de Escuela"
              defaultChecked={isChecked('nearbyBusStops', 'Parada de Escuela')}
            />
            <label htmlFor="paradaEscuela">Parada de Escuela</label>
          </div>
          <div>
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
        <div className='mt-6 flex justify-end gap-4'>
          <Link
            href='/dashboard'
          >
            Cancelar
          </Link>
          <button >Actualizar propiedad</button>
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
