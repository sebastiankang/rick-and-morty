import SearchBar from "../SearchBar/SearchBar";
import {NavLink} from "react-router-dom";
import "./navBar.css";

export default function NavBar({onSearch, random}) {
  return (
    <div className="nav-container">
      <div>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/home">Home</NavLink>
        <NavLink to="/favorites">Favorites</NavLink>
      </div>

      <SearchBar onSearch={onSearch} />

      <button className="random" onClick={random}>
        ADD RANDOM
      </button>
    </div>
  );
}
