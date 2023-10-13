import capitalise from "./capitalise";
import sandwichesDictionary from "./sandwichesDictionary";

function fetchSprite(spriteName) {
    let nameArray = [];
    spriteName.split(" ").forEach((word) => {
        nameArray.push(word.charAt(0).toLowerCase() + word.slice(1));
    });
    let newName = nameArray.join("");
    return `https://www.serebii.net/itemdex/sprites/${newName}.png`;
}

export default function SandwichRecipe(type, herbaMystica) {
    // Each ingredient and seasoning has an array of images === the number needed to craft the sandwich
    return (
        <div className="typeSandwich" key={type}>
            <h3>{capitalise(type)}</h3>
            {Object.keys(
                sandwichesDictionary[type][herbaMystica === true ? "HM" : "nonHM"].ingredients
            ).map((ingredient) => {
                return [
                    ...Array(
                        sandwichesDictionary[type][herbaMystica === true ? "HM" : "nonHM"]
                            .ingredients[ingredient]
                    ),
                ].map((e, i) => <img src={fetchSprite(ingredient)} alt={ingredient} key={i}></img>);
            })}
            {Object.keys(
                sandwichesDictionary[type][herbaMystica === true ? "HM" : "nonHM"].seasonings
            ).map((seasoning) => {
                return [
                    ...Array(
                        sandwichesDictionary[type][herbaMystica === true ? "HM" : "nonHM"]
                            .seasonings[seasoning]
                    ),
                ].map((e, i) => <img src={fetchSprite(seasoning)} alt={seasoning} key={i}></img>);
            })}
        </div>
    );
}
