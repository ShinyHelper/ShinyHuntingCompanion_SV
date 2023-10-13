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
        <div>
            <h1>SandwichesPage</h1>
            <button id="herbaMysticaButton" onClick={handleClickHM}>
                Herba Mystica
            </button>
            <button id="nonHerbaMysticaButton" onClick={handleClickNonHM}>
                Non-Herba Mystica
            </button>
            {herbaMystica ? (
                <div>
                    {types.map((type) => {
                        return (
                            <div className="typeSandwich" key={type}>
                                <h3>{capitalise(type)}</h3>
                                <h5>Ingredients: </h5>
                                {Object.keys(sandwichesDictionary[type].HM.ingredients).map(
                                    (ingredient) => {
                                        return (
                                            <div className="ingredient" key={ingredient}>
                                                <img src={fetchSprite(ingredient)} alt={ingredient}></img>
                                                {" : " +
                                                    sandwichesDictionary[type].HM.ingredients[
                                                        ingredient
                                                    ]}
                                            </div>
                                        );
                                    }
                                )}
                                <h5>Seasonings:</h5>
                                {Object.keys(sandwichesDictionary[type].HM.seasonings).map(
                                    (seasoning) => {
                                        return (
                                            <div className="seasoning" key={seasoning}>
                                                <img src={fetchSprite(seasoning)} alt={seasoning}></img>
                                                {" : " +
                                                    sandwichesDictionary[type].HM.seasonings[
                                                        seasoning
                                                    ]}
                                            </div>
                                        );
                                    }
                                )}
                            </div>
                        );
                    })}
                </div>
            ) : (
                <div>
                    {types.map((type) => {
                        return (
                            <div className="typeSandwich" key={type}>
                                <h3>{capitalise(type)}</h3>
                                <h5>Ingredients: </h5>
                                {Object.keys(sandwichesDictionary[type].nonHM.ingredients).map(
                                    (ingredient) => {
                                        return (
                                            <div className="ingredient" key={ingredient}>
                                                <img src={fetchSprite(ingredient)} alt={ingredient} />
                                                {" : " +
                                                    sandwichesDictionary[type].nonHM.ingredients[
                                                        ingredient
                                                    ]}
                                            </div>
                                        );
                                    }
                                )}
                                <h5>Seasonings:</h5>
                                {Object.keys(sandwichesDictionary[type].nonHM.seasonings).map(
                                    (seasoning) => {
                                        return (
                                            <div className="seasoning" key={seasoning}>
                                                <img src={fetchSprite(seasoning)} alt={seasoning}></img>
                                                {" : " +
                                                    sandwichesDictionary[type].nonHM.seasonings[
                                                        seasoning
                                                    ]}
                                            </div>
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
