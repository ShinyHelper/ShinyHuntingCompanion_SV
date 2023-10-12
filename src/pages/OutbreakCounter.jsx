import { useState } from "react";

export default function OutbreakCounterPage(){
    let[count, setCount] = useState(0);
    let pokemon = 'pokemon';

    return(
        <div className="button-wrapper">
            <h1>OutbreakCounterPage</h1>
            <h2>{count}/60</h2>
            {count == 0 && <span>Let the shiny hunt begin!</span>}
            {count >= 1 && count <= 10 && <span>The start of something great</span>}
            {count > 10 && count <= 30 && <span>Those {pokemon} don't know what hit them!</span>}
            {count > 30 && count <= 45 && <span>More than halfway there!</span>}
            {count > 45 && count <= 55 && <span>That shiny is on the horizon!</span>}
            {count > 55 && count <= 59 && <span>{60 - count} more to go!</span>}
            {count >= 60 && <span>DANGER ZONE!</span>}
            <button className="increment" onClick={ () => setCount(count+1)}>+</button>
            <button className="decrement" onClick={ () => setCount(count == 0 ? count = 0 : count - 1)}>-</button>
            <button className="reset" onClick={ () => setCount(count=0)}>X</button>
        </div>
    )
}