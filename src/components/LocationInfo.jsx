import React from 'react'

const LocationInfo = ({location}) => {
  return (
   <article className='card-location'>
    <h2 className='card-location_name'>{location?.name}</h2>
    <ul className='card-location_data'>
        <li className='card-location_type'> <span className='card-type_span'>Type:</span> {location?.type}</li>
        <li className='card-location_dimension'> <span className='card-dimesion_span'>Dimension:</span> {location?.dimension}</li>
        <li className='card-location_popu' > <span span className='card-popula_span'>Population:</span> {location?.residents.length}</li>
    </ul>
   </article>
  )
}

export default LocationInfo