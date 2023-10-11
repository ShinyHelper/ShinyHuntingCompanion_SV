import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import OutbreakCounterPage from "./pages/OutbreakCounter";
import SandwichesPage from "./pages/Sandwiches";
import PokemonPage from "./pages/PokemonPage";
import GuidePage from "./pages/Guide";
import ApiProvider from "./contexts/apiContext";
import ActivePokemonProvider from "./contexts/activePokemon";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <ApiProvider>
            <ActivePokemonProvider>
                <BrowserRouter>
                    <Header />
                    <Routes>
                        <Route path="/" element={<App />} />
                        <Route path="/counter" element={<OutbreakCounterPage />} />
                        <Route path="/sandwiches" element={<SandwichesPage />} />
                        <Route path="/guide" element={<GuidePage />} />
                        <Route path="/search/:pokemonName" element={<PokemonPage />} />
                    </Routes>
                </BrowserRouter>
            </ActivePokemonProvider>
        </ApiProvider>
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
