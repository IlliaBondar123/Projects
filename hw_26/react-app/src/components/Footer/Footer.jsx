import { NavLink, Link } from "react-router-dom";
import Contact from "../Contact/Contact";
import "./_footer.scss";

import logo from "./img/marvel.png";
import facebook from "./img/facebook-f.png";
import linkedin from "./img/linkedin.png";
import twitter from "./img/twitter.png";
import youtube from "./img/youtube.png";

function Footer () {
  return (
    <div className="footer">
      <div className="container footer-wrapper">
        <div className="logo-copyright">
          <Link className="logo" to="/">
      <img className="logo-footer" src={logo} alt="logo" />
      </Link>
      <p className="marvel">© 2024 MARVEL</p>
        <Link to="http://marvel.com\" className="marvel">Data provided by Marvel. © 2024 MARVEL</Link>
        </div>
      <div className="social-links">
        <h2>Follow us</h2>
      <nav>
        <ul>
          <NavLink to="#"><img src={facebook} alt="" /><p>Facebook</p></NavLink>
          <NavLink to="#"><img className="linkedin" src={linkedin} alt="" /><p>LinkedIn</p></NavLink>
          <NavLink to="#"><img className="twitter" src={twitter} alt="" /><p>Twitter</p></NavLink>
          <NavLink to="#"><img className="youtube" src={youtube} alt="" /><p>Youtube</p></NavLink>
        </ul>
      </nav>
      </div>
      <div className="socials">
        <h2 className="contacts-footer">Contact us</h2>
        <Contact></Contact>
      </div>
      </div>
      </div>
  ) }
  export default Footer;