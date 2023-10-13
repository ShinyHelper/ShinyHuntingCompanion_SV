import { useState } from "react"

export default function SandwichesPage(){
    let [herbaMystica, setHerbaMystica] = useState(false)
    function handleClickHM(){
        setHerbaMystica(true)
    }

    function handleClickNonHM(){
        setHerbaMystica(false)
    }

    return(
        <div>
        <h1>SandwichesPage</h1>
        <button id="herbaMysticaButton" onClick={handleClickHM}>Herba Mystica</button>
        <button id="nonHerbaMysticaButton" onClick={handleClickNonHM}>Non-Herba Mystica</button>
        {herbaMystica ? <p>Herba mystica sandwiches here</p> : <p>non-HM sandwiches here</p>}
        </div>
    )
}