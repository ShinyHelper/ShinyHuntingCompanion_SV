import "./App.css";
import { NavLink, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import Select from "react-select";

// This converts the incoming data into a usable format
function tidyUp(data) {
    let newData = [];
    data.forEach((element) => {
        newData.push({ value: "/search/" + element.name, label: element.name });
    });
    return newData;
}

function App() {
    let [pokemonList, setPokemonList] = useState([]);
    let navigate = useNavigate();

    // This creates a list on all pokemon on initial render
    // This list is used for the searchable combobox
    useEffect(() => {
        fetchAllPokemon();
        async function fetchAllPokemon() {
            let response = await fetch("https://pokeapi.co/api/v2/pokemon/?limit=100000000");
            let data = await response.json();
            let cleanedData = tidyUp(data.results);
            setPokemonList(cleanedData);
        }
    }, []);
    return (
        <div className="App">
            <h1 id="title">Shiny Companion</h1>
            <div id="homeSearchBar" >
                <Select
                    options={pokemonList}
                    onChange={({ value }) => navigate(value)}
                />
            </div>
            <nav id="homeNav">
                <NavLink to="/counter">Counter</NavLink>
                {"  "}
                <NavLink to="/sandwiches">Sandwiches</NavLink>
                {"  "}
                <NavLink to="/guide">Guide</NavLink>
            </nav>
        </div>
    );
}

export default App;
