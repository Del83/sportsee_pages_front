import { NavLink } from "react-router-dom";
import logo from "./logo.svg";
import "./Layout.css";

/** Create header 
 * @return {JSX} React header component 
 */ 
function Header() {
    return (
        <header className="header">
            <div className="header-logo-ctn">
                <img className="header-logo-img" src={logo} alt="logo" />
            </div>
            <nav className="header-nav">
                <ul className="header-nav-listctn">
                    <li className="header-nav-link">
                      <NavLink to="#">Accueil</NavLink>
                    </li>
                    <li className="header-nav-link">
                      <NavLink to="#">Profil</NavLink>
                    </li>
                    <li className="header-nav-link">
                      <NavLink to="#">Réglage</NavLink>
                    </li>
                    <li className="header-nav-link">
                      <NavLink to="#">Communauté</NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    );
  }
  
  export default Header;