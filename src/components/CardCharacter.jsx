
import useApiCharacter from '../hooks/useApiCharacter'

const CardCharacter = ({resident}) => {


  const character = useApiCharacter(resident)

  return (
    <article className='card-character'>
       <div className='card-character_data'> 
       <img src={character?.image} alt={character?.name} />
        <div><p className='card-character_status'><i class='bx bx-adjust'></i>{character?.status}</p></div>
        </div>
      <h2 className='card-character_name'>{character?.name}</h2>
      <p className='card-character_origin'><span className='card-origin_span'>Origin:</span> {character?.origin.name}</p>
      <p className='card-character_episodes'><span className='card-episodes_span'>Episodes:</span> {character?.episode.length}</p>
    </article>
  )
}

export default CardCharacter