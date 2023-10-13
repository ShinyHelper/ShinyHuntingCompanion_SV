import { useState } from "react";
import { useContext } from "react";
import { ActivePokemon } from "../contexts/activePokemon";

export default function OutbreakCounterPage() {
    let [count, setCount] = useState(0);
    let { activePokemon } = useContext(ActivePokemon);

    return (
        <div className="counter-wrapper">
            <div className="button-wrapper">
                <button className="increment activeSandwich" onClick={() => setCount(count + 1)}>
                    {count === 0 && <p className="directive-text">Let the shiny hunt begin!</p>}
                    {count >= 1 && count <= 10 && (
                        <p className="directive-text">The start of something great</p>
                    )}
                    {count > 10 && count <= 30 && (
                        <p className="directive-text">
                            Those {activePokemon.name || 'pokemon'} don't know what hit them!
                        </p>
                    )}
                    {count > 30 && count <= 45 && (
                        <p className="directive-text">More than halfway there!</p>
                    )}
                    {count > 45 && count <= 55 && (
                        <p className="directive-text">That shiny is on the horizon!</p>
                    )}
                    {count > 55 && count <= 59 && (
                        <p className="directive-text">{60 - count} more to go!</p>
                    )}
                    {count >= 60 && <p className="directive-text">DANGER ZONE!</p>}
                    {activePokemon.name.length > 0 ? (
                      <>
                        <img alt="frontDefaultSprite" src={activePokemon.sprites.front_default} />
                        <img alt="frontDefaultSprite" src={activePokemon.sprites.front_shiny} />
                      </>
                    ) : (
                        "+"
                    )}
                    <h2 className="count">{count}/60</h2>
                </button>
                <button
                    className="decrement"
                    onClick={() => setCount(count === 0 ? (count = 0) : count - 1)}
                >
                    -
                </button>
                {/* active Sandwich class is used solely for styling here */}
                <button className="reset" onClick={() => setCount((count = 0))}>
                    Reset Counter
                </button>
            </div>
        </div>
    );
}
