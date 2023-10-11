import { createContext, useState } from "react";

export const ActivePokemon = createContext(null);

export default function ActivePokemonProvider({ children }) {
    const [activePokemon, setActivePokemon] = useState({name:''});

    return (
        <ActivePokemon.Provider
            value={{
                activePokemon: activePokemon,
                setActivePokemon: setActivePokemon,
            }}
        >
            {children}
        </ActivePokemon.Provider>
    );
}
