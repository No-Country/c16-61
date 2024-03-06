import { type Property } from '@prisma/client'

interface PropertiesGridItemProps {
  property: Property
}

export const PropertiesGridItem = ({ property }: PropertiesGridItemProps) => {
  return (
    <>
      <h1>{property.name}</h1>
      <p>Area: <span>{property.coveredArea} mts²</span></p>
      <p>Total del terreno: <span>{property.totalLandArea} mts²</span></p>
      <p>Baños: <span>{property.bathrooms}</span></p>
      <p>Habitaciones: <span>{property.bedrooms}</span></p>
      <p>Precio: <span>{property.price}</span></p>
      <p>Comodidades: <span>{property.amenities.join(', ')}</span></p>
      <p>Servicios: <span>{property.services.join(', ')}</span></p>
      <p>Lugares cercanos: <span>{property.nearbyPlaces.join(', ')}</span></p>
      <p>Paradas de autobus: <span>{property.nearbyBusStops.join(', ')}</span></p>
    </>
  )
}
