import { Link } from "react-router-dom";

function Card(props){

    return(
        <div className="cardProduct">
            <div className="cardTitulo"> {props.item.nombre}</div>
            <div className="cardImg"> <img src={props.item.img} alt="" /></div>
            <div className="cardDetails">
                <span>Precio:$ {props.item.precio}</span>
                <Link to={`/producto/${props.item.id}`}><button> Detalle</button></Link>
            </div>

        </div>

    );
}

export default Card;