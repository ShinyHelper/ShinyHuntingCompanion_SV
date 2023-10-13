import { NavLink, useNavigate } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import Select from "react-select";
import { TimerToggle } from "../contexts/timerToggle";

// This converts the incoming data into a usable format
function tidyUp(data) {
    let newData = [];
    data.forEach((element) => {
        newData.push({ value: "/search/" + element.name, label: element.name });
    });
    return newData;
}

export default function Header() {
    let [pokemonList, setPokemonList] = useState([]);
    let navigate = useNavigate();
    let [searchActive, setSearchActive] = useState(false);
    let { timerStatus, setTimerStatus } = useContext(TimerToggle);

    function toggleTimer() {
        setTimerStatus(!timerStatus);
    }

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

    function handleFocus() {
        setSearchActive(!searchActive);
    }

    return window.location.href === "https://shiny-companion.netlify.app/" ? (
        ""
    ) : (
        <header id="header">
            <nav>
                <NavLink to="/">Home</NavLink>
                {"  "}
                <NavLink to="/counter">Counter</NavLink>
                {"  "}
                <NavLink to="/sandwiches">Sandwiches</NavLink>
                {"  "}
                <NavLink to="/guide">Guide</NavLink>
                <button id="timerToggle" onClick={toggleTimer}>
                    {(timerStatus ? "Hide" : "Show") + " Hunt Timer"}
                </button>
                <div id="searchBar" className={searchActive ? "searchActive" : "searchNotActive"}>
                    <Select
                        options={pokemonList}
                        onChange={({ value }) => navigate(value)}
                        onFocus={handleFocus}
                        onBlur={handleFocus}
                    />
                </div>
            </nav>

            {/* <button id="returnButton" onClick={() => navigate(-1)}>
                {"< Back"}
            </button> */}
        </header>
    );
}
