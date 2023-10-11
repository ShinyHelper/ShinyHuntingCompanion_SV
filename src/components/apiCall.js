export default async function fetchData(url) {
    let response = await fetch(url);
    let responseData = await response.json();
    console.log(responseData)
    let niceData = await makeDataNice(responseData);
    console.log(niceData)
    return niceData;
}


// this function strips unneeded data and formatting.
function makeDataNice(data) {
    let niceData = {};
    niceData.name = data.name;
    niceData.types = [];
    niceData.warning = [];
    niceData.sprites = {
        front_default: data.sprites.other["official-artwork"].front_default,
        front_shiny: data.sprites.other["official-artwork"].front_shiny,
    };

    data.types.forEach((element) => {
        niceData.types.push(element.name);
    });

    // These moves can all kill the pokemon that uses them. 
    // Need to warn the user to bring countermeasures
    let warningMoves = [
        "brave-bird",
        "chloroblast",
        "double-edge",
        "flare-blitz",
        "head-charge",
        "head-smash",
        "self-destruct",
        "shadow-end",
        "shadow-rush",
        "submission",
        "take-down",
        "volt-tackle",
        "wave-crash",
        "wild-charge",
        "wood-hammer",
    ];

    data.moves.forEach((element) => {
        if (warningMoves.includes(element.move.name)) {
            niceData.warning.push(element.move.name);
        }
    });
    console.log(niceData)
    return niceData
}