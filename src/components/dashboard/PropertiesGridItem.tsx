import { type Property } from '@prisma/client'
import Link from 'next/link'
import style from './PropertiesGridItem.module.css'
import { ButtonDeleteProperty } from '@/properties'

interface PropertiesGridItemProps {
  property: Property
}

export const PropertiesGridItem = ({ property }: PropertiesGridItemProps) => {
  return (

    <div className={style.propertyContainer}>
      <div className={style.buttons}><Link className={style.edit} href={`/properties/${property.id}/edit`}><svg className={style.editicon} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="#000000"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <title></title> <g id="Complete"> <g id="edit"> <g> <path d="M20,16v4a2,2,0,0,1-2,2H4a2,2,0,0,1-2-2V6A2,2,0,0,1,4,4H8" fill="none" stroke="#000000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path> <polygon fill="none" points="12.5 15.8 22 6.2 17.8 2 8.3 11.5 8 16 12.5 15.8" stroke="#000000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></polygon> </g> </g> </g> </g></svg></Link>
      <ButtonDeleteProperty id={property.id} /></div>
      <h2 className={style.propertyTitle}>{property.name}</h2>
      <span className={style.detailValue}>${property.price}</span>
      <div className={style.propertySection}><p className={style.propertySectionTitle}>Detalles</p>
        <div className={style.propertyDetails}>
          <div className={style.propertyDetail}>
            <img
              src="https://firebasestorage.googleapis.com/v0/b/imomubiales1.appspot.com/o/coverarea.svg?alt=media&token=bfaf3f49-8f05-4826-8e45-0dc7eb55f8ce"
              alt="area-cubierta"
              className={style.icon}
            />
            <div className={style.detailInfo}>
              <span className={style.detailLabel}>Area</span>
              <span className={style.detailValue}>{property.coveredArea} mts²</span>
            </div>
          </div>
          <div className={style.propertyDetail}>
            <svg
              fill="#000000"
              height="25px"
              width="25px"
              version="1.1"
              id="Capa_1"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              viewBox="0 0 245.562 245.562"
              xmlSpace="preserve"
              className={style.icon}
            >
              <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
              <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
              <g id="SVGRepo_iconCarrier">
                <path
                  d="M244.062,180.838L150.227,55.725c-1.417-1.889-3.639-3-6-3c-2.361,0-4.584,1.111-6,3l-38.904,51.873L83.876,87.002 c-1.416-1.889-3.639-3-6-3c-2.361,0-4.583,1.111-6,3L1.5,180.838c-1.704,2.272-1.978,5.314-0.708,7.855 c1.27,2.54,3.867,4.145,6.708,4.145h230.562c2.841,0,5.438-1.605,6.708-4.145C246.041,186.151,245.767,183.11,244.062,180.838z M22.5,177.838l55.376-73.836l15.446,20.596c1.416,1.889,3.639,3,6,3c2.361,0,4.583-1.111,6-3l38.904-51.873l78.836,105.113H22.5z"
                  fill="#000000"
                ></path>
              </g>
            </svg>
            <div className={style.detailInfo}>
              <span className={style.detailLabel}>Terreno</span>
              <span className={style.detailValue}>{property.coveredArea} mts²</span>
            </div>
          </div>
          <div className={style.propertyDetail}>
            <img
              src="https://firebasestorage.googleapis.com/v0/b/imomubiales1.appspot.com/o/bathfilled.svg?alt=media&token=78b7c5a4-289c-4c87-b0e4-f395f3c31add"
              alt="baños"
              className={style.icon}
            />
            <div className={style.detailInfo}>
              <span className={style.detailLabel}>Baños</span>
              <span className={style.detailValue}>{property.bathrooms}</span>
            </div>
          </div>
          <div className={style.propertyDetail}>
            <img
              src="https://firebasestorage.googleapis.com/v0/b/imomubiales1.appspot.com/o/bedfilled.svg?alt=media&token=81a6b35c-fc50-45be-a04f-c77da8110356"
              alt="habtaciones"
              className={style.icon}
            />
            <div className={style.detailInfo}>
              <span className={style.detailLabel}>Habitaciones</span>
              <span className={style.detailValue}>{property.bedrooms}</span>
            </div>
          </div>
        </div></div>
      <div className={style.propertySection}>
        <p className={style.propertySectionTitle}>Amenidades & Servicios</p>
        <div className={style.propertyDetail}>
          <svg className={style.icon} viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
            <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
            <g id="SVGRepo_iconCarrier">
              <path
                d="M1 12.6C1.65 13.3333 2.65455 14 3.95455 14C6.90909 14 7.5 12 10.4545 12C11.8136 12 13.0545 12.7333 14 13.4667M2.5 12V3.72724C2.5 1.94542 3.85458 0.5 5.63639 0.5M9.5 10V3.63639C9.5 1.85458 10.9 0.5 12.6818 0.5M2.5 4.5H9.5M2.5 8.5H9.5"
                stroke="#000000"
                strokeMiterlimit="10"
                strokeLinejoin="round"
              ></path>
            </g>
          </svg>
          <span>{property.amenities.join(', ')}</span>
        </div>
        <div className={style.propertyDetail}>
          <svg className={style.icon} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="#000000">
            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
            <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
            <g id="SVGRepo_iconCarrier">
              <path d="M12,20a6,6,0,0,1-6-6c0-4,6-10.8,6-10.8S18,10,18,14A6,6,0,0,1,12,20Z"></path>
              <rect width="24" height="24" fill="none"></rect>
            </g>
          </svg>
          <span>{property.services.join(', ')}</span>
        </div>
      </div>
      <div className={style.propertySection}><p className={style.propertySectionTitle}>Lugares Cercanos</p>
        <div className={style.propertyDetail}>
          <svg
            className={style.icon}
            viewBox="0 0 76 76"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            version="1.1"
            baseProfile="full"
            enableBackground="new 0 0 76.00 76.00"
            xmlSpace="preserve"
            fill="#000000"
          >
            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
            <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
            <g id="SVGRepo_iconCarrier">
              <path
                fill="#000000"
                fillOpacity="1"
                strokeWidth="0.2"
                strokeLinejoin="round"
                d="M 28.5,20.5833L 47.5,20.5833L 47.5,23.75L 28.5,23.75L 28.5,20.5833 Z M 49.0833,31.6667L 64.9166,31.6667L 64.9166,34.8334L 49.0833,34.8334L 49.0833,31.6667 Z M 28.5,25.3334L 34.8333,25.3334L 41.1666,25.3334L 47.5,25.3334L 47.5,52.25L 41.1666,52.25L 41.1666,42.75L 34.8333,42.75L 34.8333,52.25L 28.5,52.25L 28.5,25.3334 Z M 49.0833,52.25L 49.0833,36.4167L 53.8333,36.4167L 60.1666,36.4167L 64.9166,36.4167L 64.9166,52.25L 60.1666,52.25L 60.1666,44.3333L 53.8333,44.3333L 53.8333,52.25L 49.0833,52.25 Z M 11.0833,52.25L 11.0833,44.3333L 11.0833,41.1667L 19.7917,34.8334L 26.9167,41.1667L 26.9167,44.3333L 26.9167,52.25L 22.1667,52.25L 22.1667,44.3333L 15.8333,44.3333L 15.8333,52.25L 11.0833,52.25 Z M 19.7916,29.6875L 26.9166,36.0209L 26.9166,39.1875L 19.7916,32.8542L 9.49999,40.375L 9.49999,37.2084L 19.7916,29.6875 Z "
              ></path>
            </g>
          </svg>
          <span>{property.nearbyPlaces.join(', ')}</span>
        </div>
      </div>
      <div className={style.propertySection}><p className={style.propertySectionTitle}>Paradas Cercanas</p>
        <div className={style.propertyDetail}>
          <img
            src="https://firebasestorage.googleapis.com/v0/b/imomubiales1.appspot.com/o/busstop.svg?alt=media&token=bc4ff7fd-ad7d-4bfd-b4b1-2c8cdf1a4ff0"
            alt="paradas-bus"
            className={style.icon}
          />
          <span>{property.nearbyBusStops.join(', ')}</span>
        </div>
      </div>
    </div>
  )
}
