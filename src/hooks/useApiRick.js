import axios from "axios"
import { useEffect, useState } from "react"

const useApiRick = searchLocation => {

    const [location, setLocation] = useState()
    const [loading, setLoading] = useState(true)

    useEffect(() => {

        let numberLocation
        if(searchLocation){
            numberLocation = searchLocation
        }else{
         numberLocation = Math.ceil(Math.random() * 126)
        }
        
        const URL = `https://rickandmortyapi.com/api/location/${numberLocation}`

        axios.get(URL)
            .then(res =>{
                setLocation(res.data)
                setLoading(false)
            })
            .catch(err => console.log(err))

    }, [searchLocation])


    return {location, loading}

}

export default useApiRick