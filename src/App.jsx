
import './App.css'
import CardCharacter from './components/CardCharacter'
import Input from './components/Input'
import LocationInfo from './components/LocationInfo'
import useApiRick from './hooks/useApiRick'
import { useState } from 'react'
import Loader from './components/Loader'
import green from './assets/img/green.jpg'


function App() {

  const [searchLocation, setSearchLocation] = useState()
  const { location, loading } = useApiRick(searchLocation)


  return (
    <div className='loading'>
      {loading ?

        <Loader/> :
        <>
          <header className='header'>
            <LocationInfo
              location={location}
            />
            <Input
              setSearchLocation={setSearchLocation}
            />
            
          </header>
          <main className='main-cards_container'>
            {location.residents.map(resident => (
              <CardCharacter
                resident={resident}
                key={resident}
              />
            )
            )}
          </main>

        </>

      }
    </div>
  )
}

export default App
