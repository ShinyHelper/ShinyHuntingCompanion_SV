import { createContext, useState } from "react";

export const ApiContext = createContext(null);

export default function ApiProvider({ children }) {
    const [apiUrl, setApiUrl] = useState("https://pokeapi.co/api/v2/pokemon/");

    return (
        <ApiContext.Provider
            value={{
                apiUrl: apiUrl,
                setApi: setApiUrl,
            }}
        >
            {children}
        </ApiContext.Provider>
    );
}
