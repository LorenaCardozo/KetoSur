import React from 'react';
import { useParams } from 'react-router-dom';

function Finished() {

    const { orderId } = useParams();


    return (
        <div className='div-centro'>
            <h1> Gracias por tu compra!!</h1>
            <h3> Orden generada: {orderId} </h3>
        </div>
    );
}

export default Finished;