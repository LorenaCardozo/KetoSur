import React, { useState } from "react";
import InputForm from './InputForm';

function Contacto(props) {

    const [EnProcess, SetEnProcess] = useState(false);

    //campos que se veran en el formulario
    const [userData, setUserData] = useState({
        Nombre: "",
        Email: "",
        Telefono: "",
        Direccion: ""
    });

    let fieldsForm = Object.keys(userData);

    function IsInvalid() {

        return (
            userData.Nombre === "" ||
            userData.Telefono === "" ||
            userData.Email === "" ||
            userData.Direccion === ""
        );
    }

    function onInputChange(evt) {
        // cada cambio en los campos se actualiza en userData
        let value = evt.target.value;
        let inputName = evt.target.name;

        let newState = { ...userData };

        newState[inputName] = value;
        setUserData(newState);

    }

    function onSubmit(evt) {
        evt.preventDefault();

        SetEnProcess(true);

        props.onFinished(userData)
    }

    return (

        <form onSubmit={onSubmit}>
            <span className="titulo">Completá tus datos para finalizar la compra</span>
            {fieldsForm.map((field) => (
                <InputForm
                    key={field}
                    value={userData[field]}
                    name={field}
                    label={field}
                    onChange={onInputChange}
                />
            ))}
            <button className={IsInvalid()?"bt-count block":"bt-count"}  type="submit" disabled={EnProcess}>Finalizar Compra</button>

        </form>
    );
}

export default Contacto;