import { createContext, useState } from "react";


let pokemonList = fetchAllPokemon()

async function fetchAllPokemon(){
    return await fetch("https://pokeapi.co/api/v2/pokemon/?limit=100000000");
}

