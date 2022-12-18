import CartWidget from "./CartWidget"

function NavBar() {

    return(
        <div className="navbar">
            <img src="./img/keto.png"/>
            <ul className="navbar-items">
                <li className="navbar-link"><a href="/">Panadería</a></li>
                <li className="navbar-link"><a href="/">Postres</a></li>
                <li className="navbar-link"><a href="/">Viandas</a></li>
            </ul>
            <CartWidget/>
        </div>
    )

    
}

export default NavBar