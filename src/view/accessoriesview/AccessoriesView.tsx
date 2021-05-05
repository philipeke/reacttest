import Axios from 'axios'
import { useState } from 'react'

export const AccessoriesView = () => {
    const [serverResponse, setServerResponse] = useState<any>()
    const [counter, setCounter] = useState<number>(1)

    /*const fetchData = () => {
        //API anrop
        //Axios.post skicka data till AP
        //Axios.get hämta data
        //Axios.put uppdatera befintlig data
        //Axios.delete ta bort information
        const API_URL = `https://pokeapi.co/api/v2/pokemon/${counter}`
        Axios.get(API_URL)
            .then((response) => { setServerResponse(response) })
            .catch((error) => { alert('Error retrieving desired data from server') })
        setCounter(counter + 1)
    }*/

    //Detta är ett mer modernt sett att skriva ovan kod på (async: tänk telefon och sms där async är sms )
    const fetchData = async () => {
        const API_URL = `https://pokeapi.co/api/v2/pokemon/${counter}`
        try {
            const response = await Axios.get(API_URL)
            setServerResponse(response)
            setCounter(counter +1)
    } catch (error) {
            alert('Error retrieving desired data from server')
        }
    }


    return (
        // frågetecknet nedan innan seerverResponse och data betyder: null check
        <div>
            <h1>{serverResponse?.data?.name}</h1>
            <button onClick={() => fetchData()}>Make API call</button>
            <button onClick={() => console.log(serverResponse)}>Show state</button>
        </div>
    )
}


