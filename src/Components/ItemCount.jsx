import { useState } from "react";

function ItemCount(props) {
  const [count, setCount] = useState(0);
  let stock = props.stock;

  function Agregar() {
    setCount(count + 1);
  }

  function Restar() {
    setCount(count - 1);
  }

  return (
    <div className="div-count">
      Cantidad
      <button className="bt-count" disabled={count === 0} onClick={Restar}>-</button>
      <p>{count}</p>
      <button className="bt-count" disabled={count === stock} onClick={Agregar}>+</button>
      <button className="bt-count">Agregar al carrito</button>
    </div>
  );
}

export default ItemCount;