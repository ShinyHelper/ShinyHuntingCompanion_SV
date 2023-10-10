import { NavLink } from "react-router-dom";

export default function Header(){
    return(
        <div id="header">
            This is the header
            <NavLink to='/'>Home</NavLink>
            {'  '}
            <NavLink to='/counter'>Counter</NavLink>
            {'  '}
            <NavLink to='/sandwiches'>Sandwiches</NavLink>
            {'  '}
            <NavLink to='/guide'>Guide</NavLink>
            {'  '}
            <NavLink to='/search/pikachu'>Pikachu (for testing)</NavLink>
        </div>
    )
}