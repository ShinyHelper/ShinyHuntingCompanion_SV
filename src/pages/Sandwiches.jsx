import { useState } from "react";
import sandwichesDictionary from "../components/sandwichesDictionary";
import capitalise from "../components/capitalise";

export default function SandwichesPage() {
    let [herbaMystica, setHerbaMystica] = useState(false);
    function handleClickHM() {
        setHerbaMystica(true);
    }

    function handleClickNonHM() {
        setHerbaMystica(false);
    }
    let types = Object.keys(sandwichesDictionary)

    return (
        <div id="sandwichPage">
            <h1>SandwichesPage</h1>
            {/* className is activeSandwich because react-router uses the active class for navLinks */}
            <div id="buttonsDiv">
                <button id="herbaMysticaButton" onClick={handleClickHM} className={herbaMystica ? "activeSandwich" : ''}>
                    Herba Mystica
                </button>
                <button id="nonHerbaMysticaButton" onClick={handleClickNonHM} className={!herbaMystica ? "activeSandwich" : ''}>
                    Non-Herba Mystica
                </button>
            </div>
            {herbaMystica ? (
                <div id="recipesDiv">
                    {/* This creates an array of types, each type has its own array of ingredients and seasonings. 
                    Each ingredient and seasoning has an array of images === the number needed to craft the sandwich */}
                    {types.map((type) => {
                        return (
                            <div className="typeSandwich" key={type}>
                                <h3>{capitalise(type)}</h3>
                                {Object.keys(sandwichesDictionary[type].HM.ingredients).map(
                                    (ingredient) => {
                                        return (
                                            [...Array(sandwichesDictionary[type].HM.ingredients[ingredient])].map((e, i) => <img src={fetchSprite(ingredient)} alt={ingredient} key={i}></img>)
                                        );
                                    }
                                )}
                                {Object.keys(sandwichesDictionary[type].HM.seasonings).map(
                                    (seasoning) => {
                                        return (
                                            [...Array(sandwichesDictionary[type].HM.seasonings[seasoning])].map((e, i) => <img src={fetchSprite(seasoning)} alt={seasoning} key={i}></img>)
                                        );
                                    }
                                )}
                            </div>
                        );
                    })}
                </div>
            ) : (
                <div id="recipesDiv">
                    {types.map((type) => {
                        return (
                            <div className="typeSandwich" key={type}>
                                <h3>{capitalise(type)}</h3>
                                {Object.keys(sandwichesDictionary[type].nonHM.ingredients).map(
                                    (ingredient) => {
                                        return (
                                            [...Array(sandwichesDictionary[type].nonHM.ingredients[ingredient])].map((e, i) => <img src={fetchSprite(ingredient)} alt={ingredient} key={i}></img>)
                                        );
                                    }
                                )}
                                {Object.keys(sandwichesDictionary[type].nonHM.seasonings).map(
                                    (seasoning) => {
                                        return (
                                            [...Array(sandwichesDictionary[type].nonHM.seasonings[seasoning])].map((e, i) => <img src={fetchSprite(seasoning)} alt={seasoning} key={i}></img>)
                                        );
                                    }
                                )}
                            </div>
                        );
                    })}
                </div>
            )}
        </div>
    );
}

function fetchSprite(spriteName) {
    let nameArray = [];
    spriteName.split(" ").forEach((word) => {
        nameArray.push(word.charAt(0).toLowerCase() + word.slice(1));
    });
    let newName = nameArray.join("");
    return `https://www.serebii.net/itemdex/sprites/${newName}.png`;
}
