import logoYoga from "../../assets/yoga.svg"
import logoPool from "../../assets/pool.svg"
import logoBike from "../../assets/bike.svg"
import logoDumbbell from "../../assets/dumbbell.svg"
import "./Layout.css";

/** Create sidebar 
 * @return {JSX} React sidebar component 
 */
function SideBar() {
    return (
        <div className="sideBar">
            <nav className="sideBar-nav">
                <ul className="sideBar-nav-listctn">
                    <li className="sideBar-logo-ctn">
                        <img className="sideBar-logo-yoga" src={logoYoga} alt="logo-yoga" />
                    </li>
                    <li className="sideBar-logo-ctn">
                        <img className="sideBar-logo-pool" src={logoPool} alt="logo-pool" />
                    </li>
                    <li className="sideBar-logo-ctn">
                        <img className="sideBar-logo-bike" src={logoBike} alt="logo-bike" />
                    </li>
                    <li className="sideBar-logo-ctn">
                        <img className="sideBar-logo-dumbbell" src={logoDumbbell} alt="logo-dumbbell" />
                    </li>
                </ul>
            </nav>
            <div className="sideBar-copyright-ctn">
               <span className="sideBar-copyright">Copyright, SportSee 2022</span> 
            </div>
            
        </div>
    );
  }
  
  export default SideBar;