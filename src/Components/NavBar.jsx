import CartWidget from "./CartWidget"
import { Link, NavLink } from "react-router-dom";


function NavBar() {

    return(
        <div className="navbar">
            <Link to={'/'}><img src="/img/keto.png" alt="logoKeto"/></Link> 
            <ul className="navbar-items">
                <li className="navbar-link"><NavLink to={'/categoria/panaderia'} activeclassname = "active">Panadería</NavLink></li>
                <li className="navbar-link"><NavLink to={'/categoria/postres'} >Postres</NavLink></li>
                <li className="navbar-link"><NavLink to={'/categoria/viandas'} >Viandas</NavLink></li>
            </ul>
            <Link to={'/cart'}><CartWidget/></Link>
        </div>
    )

}

export default NavBar