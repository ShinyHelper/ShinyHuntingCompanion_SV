import { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { ActivePokemon } from "../contexts/activePokemon";
import fetchData from "../components/apiCall";
import { ApiContext } from "../contexts/apiContext";

export default function PokemonPage() {
    let { pokemonName } = useParams();
    let { activePokemon, setActivePokemon } = useContext(ActivePokemon);
    let { apiUrl } = useContext(ApiContext);
    useEffect(() => {
        async function getPokemonData(){
            let urlToCall = apiUrl + pokemonName
            await setActivePokemon(fetchData(urlToCall));
        }
        getPokemonData()
    }, []);

    return (
        <div>
            <h1>This is the page for {pokemonName}</h1>;
            {<p>{activePokemon.name}</p> || <p>Searching</p>}
        </div>
    );
}

async function callApi(pokemonName) {}
