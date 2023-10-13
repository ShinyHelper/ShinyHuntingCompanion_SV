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
                    {Object.keys(sandwichesDictionary).map((type) => {
                        return (
                            <div className="typeSandwich" key={type}>
                                <h3>{capitalise(type)}</h3>
                                <h5>Ingredients: </h5>
                                {Object.keys(sandwichesDictionary[type].HM.ingredients).map(
                                    (element) => {
                                        console.log(element);
                                        return (
                                            <p>
                                                {element +
                                                    " : " +
                                                    sandwichesDictionary[type].HM.ingredients[
                                                        element
                                                    ]}
                                            </p>
                                        );
                                    }
                                )}
                                <h5>Seasonings:</h5>
                                {Object.keys(sandwichesDictionary[type].HM.seasonings).map(
                                    (element) => {
                                        console.log(element);
                                        return (
                                            <p>
                                                {element +
                                                    " : " +
                                                    sandwichesDictionary[type].HM.seasonings[
                                                        element
                                                    ]}
                                            </p>
                                        );
                                    }
                                )}
                            </div>
                        );
                    })}
                </div>
            ) : (
                <div>
                {Object.keys(sandwichesDictionary).map((type) => {
                    return (
                        <div className="typeSandwich" key={type}>
                            <h3>{capitalise(type)}</h3>
                            <h5>Ingredients: </h5>
                            {Object.keys(sandwichesDictionary[type].nonHM.ingredients).map(
                                (element) => {
                                    console.log(element);
                                    return (
                                        <p>
                                            {element +
                                                " : " +
                                                sandwichesDictionary[type].nonHM.ingredients[
                                                    element
                                                ]}
                                        </p>
                                    );
                                }
                            )}
                            <h5>Seasonings:</h5>
                            {Object.keys(sandwichesDictionary[type].nonHM.seasonings).map(
                                (element) => {
                                    console.log(element);
                                    return (
                                        <p>
                                            {element +
                                                " : " +
                                                sandwichesDictionary[type].nonHM.seasonings[
                                                    element
                                                ]}
                                        </p>
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
