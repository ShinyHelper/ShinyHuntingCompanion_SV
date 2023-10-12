import { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { ActivePokemon } from "../contexts/activePokemon";
import fetchData from "../components/apiCall";
import { ApiContext } from "../contexts/apiContext";
import capitalise from "../components/capitalise";

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
        // eslint-disable-next-line
    }, [pokemonName]);

    if (!activePokemon.name) {
        return <p>Searching...</p>;
    } else {
        return (
            <div>
                <h1>{capitalise(pokemonName)}</h1>
                <div>
                    <p>Warning! This pokemon may have the following moves:</p>
                    {activePokemon.warning.map((element) => {
                        return <p key={element}>{capitalise(element)}</p>;
                    })}
                    <div id="defaultImage">
                        default: <img alt="default sprite" src={activePokemon.sprites.front_default}></img>
                    </div>
                    <div id="shinyImage">
                        shiny: <img alt="shiny sprite" src={activePokemon.sprites.front_shiny}></img>
                    </div>
                </div>
            </div>
        );
    }
}
