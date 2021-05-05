import { useState, useEffect } from 'react'
import PokemonAPIService from "../../shared/api/service/PokemonAPIService"
import loadingImage from '../../shared/images/poke.gif'
export const BrandsView = () => {
    const [serverData, setServerData] = useState<any>()
    const [search, setSearch] = useState<any>()
    const [loading, setLoading] = useState<boolean>(true)

    const fetchData = async () => {
        try {
            setLoading(true)
            const { data } = await PokemonAPIService.searchPokemon(search)
            setServerData(data)
            setLoading(false)
        } catch (error) {
            console.log(alert('something went wrong'))
        }
    }

    //? undefined och null check
    const displayData = () => {
        if (!loading) {
            return (

                <div>
                    <img src={serverData?.sprites?.front_default} alt={'Error..'} />
                    <h1>Name: {serverData?.name}</h1>
                    <h1>Height: {serverData?.height}</h1>
                    <h1>weight: {serverData?.weight}</h1>
                </div>
            )
        } else{
        return <img src={loadingImage} alt={'Error.'} />
        }
    }

    useEffect(() => {
        fetchData()
    }, [search])

    return (
        <div>
            <input placeholder='Search for character' onChange={event => setSearch(event.target.value)} />
            {displayData()}
        </div>
    )
}
