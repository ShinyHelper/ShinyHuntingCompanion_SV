import { useState } from "react";
import sandwichesDictionary from "../components/sandwichesDictionary";
import SandwichRecipe from "../components/SandwichRecipe";

export default function SandwichesPage() {
    let [herbaMystica, setHerbaMystica] = useState(false);
    function handleClickHM() {
        setHerbaMystica(true);
    }

    function handleClickNonHM() {
        setHerbaMystica(false);
    }
    let types = Object.keys(sandwichesDictionary);

    return (
        <div id="sandwichPage">
            {/* className is activeSandwich because react-router uses the active class for navLinks */}
            <div id="buttonsDiv">
                <button
                    id="herbaMysticaButton"
                    onClick={handleClickHM}
                    className={herbaMystica ? "activeSandwich" : ""}
                >
                    Herba Mystica
                </button>
                <button
                    id="nonHerbaMysticaButton"
                    onClick={handleClickNonHM}
                    className={!herbaMystica ? "activeSandwich" : ""}
                >
                    Non-Herba Mystica
                </button>
            </div>
            <div id="recipesDiv">
                {/* This creates an array of types, with each type having an associated sandwich. */}
                {types.map((type) => {
                    return <div>{SandwichRecipe(type, herbaMystica)}</div>;
                })}
            </div>
        </div>
    );
}
