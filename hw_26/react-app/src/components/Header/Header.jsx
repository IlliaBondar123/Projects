import "./_header.scss"
import { NavLink, Link } from "react-router-dom";
import logo from "./img/marvel.png";
import { useState } from "react";

function Header () {
  const [isActive, setActive] = useState(false);
  function toggleClass () {
    setActive(!isActive);
  }
  return (
    <header>
    <div className={isActive ? "wrapper container active" : "wrapper container"}>
      <Link to="/">
      <img className="logo" src={logo} alt="logo" />
      </Link>
    <nav>
      <ul>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/characters">Heroes</NavLink></li>
        <li><NavLink to="/comics">Comics</NavLink></li>
        <li><NavLink to="/about">About</NavLink></li>
      </ul>
    </nav>
    <div className="btn">
      <Link to="/wishlist"><span>Wishlist</span></Link>
    </div>
    <div
      onClick={toggleClass}
      className="burger">
      <span></span>
      <span></span>
      <span></span>
    </div>
    </div>
  </header>
  )
}
export default Header;