import CartWidget from "./CartWidget"
import { Link } from "react-router-dom";


function NavBar() {

    return(
        <div className="navbar">
            <Link to={'/'}><img src="/img/keto.png"/></Link> 
            <ul className="navbar-items">
                <li className="navbar-link"><Link to={'/categoria/panaderia'}>Panadería</Link></li>
                <li className="navbar-link"><a href="/categoria/postres">Postres</a></li>
                <li className="navbar-link"><a href="/categoria/viandas">Viandas</a></li>
            </ul>
            <CartWidget/>
        </div>
    )

}

export default NavBar