import { useParams } from "react-router-dom"

export default function PokemonPage(){
    let {pokemonName} = useParams()
    return(
        <h1>This is the page for {pokemonName}</h1>
    )
}

async function callApi(pokemonName){
    
}