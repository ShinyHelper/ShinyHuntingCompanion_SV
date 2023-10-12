import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function SearchBar() {
    let [searchTerm, setSearchTerm] = useState();
    const navigate = useNavigate();

    function handleChange(event) {
        setSearchTerm(event.target.value);
    }

    function handleSubmit(event) {
        event.preventDefault();
        navigate("/search/" + searchTerm);
    }

    return (
        <form action="search">
            <input
                type="text"
                name="pokemon"
                id="pokemon"
                onChange={(event) => handleChange(event)}
            />
            <button type="submit" onClick={(event) => handleSubmit(event)}>
                search
            </button>
        </form>
    );
}
