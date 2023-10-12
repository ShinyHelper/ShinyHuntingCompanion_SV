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
    }, [pokemonName]);

    if (!activePokemon.name) {
        return <p>Searching...</p>;
    } else {
        return (
            <div id="pokemonPage">
                <h1>{capitalise(pokemonName)}</h1>
                <div>
                    {activePokemon.warning.length > 0 ? (
                        <div id="warnings">
                            <h3>Warning! This pokemon may have the following moves:</h3>
                            <ul>

                            {activePokemon.warning.map((element) => {
                                return <li key={element}>{capitalise(element)}</li>;
                            })}
                            </ul>
                        </div>
                    ) : (
                        ""
                    )}
                    <div id="pokemonPreviews">
                        <div className="preview" id="defaultPreview">
                            <img id="default_sprite" src={activePokemon.sprites.front_default} />
                            <h3>Default</h3>
                        </div>
                        <div className="preview" id="shinyPreview">
                            <img id="shiny_sprite" src={activePokemon.sprites.front_shiny} />
                            <h3>Shiny</h3>
                        </div>
                    </div>
                    <div className="info" id="sandwich">
                        <h3>Recommended sandwiches:</h3>
                        <h4>Non-Herba Mystica: </h4>
                        <div className="sandwich">
                            sandwich here
                        </div>
                        <h4>With Herba Mystica: </h4>
                        <div className="sandwich">
                            sandwich here
                        </div>

                    </div>
                </div>
            </div>
        );
    }
}

async function callApi(pokemonName) {}
