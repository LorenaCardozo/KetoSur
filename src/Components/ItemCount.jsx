import { useState } from "react";

function ItemCount(props) {
  const [count, setCount] = useState(1);
  let stock = props.stock;

  function Agregar() {
    setCount(count + 1);
  }

  function Restar() {
    setCount(count - 1);
  }

  return (
    <div className="div-count">
      <p>Cantidad</p>
      <button className="bt-count" disabled={count === 1} onClick={Restar}>-</button>
      <p>{count}</p>
      <button className="bt-count" disabled={count === stock} onClick={Agregar}>+</button>
      <button className="bt-count" onClick={()=>props.onClick(count) }>Agregar al carrito</button>
    </div>
  );
}

export default ItemCount;