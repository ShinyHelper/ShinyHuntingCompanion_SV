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
        setActivePokemon("");
        getPokemonData();

        async function getPokemonData() {
            let pokemonData = await fetchData(apiUrl + pokemonName);
            await setActivePokemon(pokemonData);
        }
    }, [pokemonName]);

    if (!activePokemon.name) {
        return <p>Searching</p>;
    } else {
        return (
            <div>
                <h1>This is the page for {pokemonName}</h1>
                <div>
                    <p>{activePokemon.name}</p>
                    <p>Warning! This pokemon may have the following moves:</p>
                    {activePokemon.warning.map((element) => {
                        return <p>{element}</p>;
                    })}
                    <p>
                        front sprite: <img src={activePokemon.sprites.front_default}></img>
                    </p>
                </div>
            </div>
        );
    }
}

async function callApi(pokemonName) {}
