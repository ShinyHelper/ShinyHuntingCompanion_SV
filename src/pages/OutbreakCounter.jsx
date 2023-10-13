import { useState } from "react";
import { useContext } from "react";
import { ActivePokemon } from "../contexts/activePokemon";

export default function OutbreakCounterPage() {
    let [count, setCount] = useState(0);
    let { activePokemon } = useContext(ActivePokemon);

        return (
            <div className="counter-wrapper">
                <h1>OutbreakCounterPage</h1>
                <h2>{count}/60</h2>
                {count === 0 && <p>Let the shiny hunt begin!</p>}
                {count >= 1 && count <= 10 && <p>The start of something great</p>}
                {count > 10 && count <= 30 && (
                    <p>Those {activePokemon.name} don't know what hit them!</p>
                )}
                {count > 30 && count <= 45 && <p>More than halfway there!</p>}
                {count > 45 && count <= 55 && <p>That shiny is on the horizon!</p>}
                {count > 55 && count <= 59 && <p>{60 - count} more to go!</p>}
                {count >= 60 && <p>DANGER ZONE!</p>}
                <div className="button-wrapper">
                    <button
                        className="decrement"
                        onClick={() => setCount(count === 0 ? (count = 0) : count - 1)}
                    >
                        -
                    </button>
                    {/* active Sandwich class is used solely for styling here */}
                    <button className="increment activeSandwich" onClick={() => setCount(count + 1)}>
                      {activePokemon.name.length > 0 ? <img alt="frontDefaultSprite" src={activePokemon.sprites.front_default} /> : '+'}
                        
                    </button>
                    <button className="reset" onClick={() => setCount((count = 0))}>
                        Reset Counter
                    </button>
                </div>
            </div>
        );
}
