import React from 'react';

function InputForm(props) {
    return (
     <div style={{ display: "flex", marginBottom: 8 }}>
      <label style={{ width: "100px", marginRight: 4 }}>{props.label}</label>
      <input style={{width: "500px"}}
        value={props.value}
        name={props.name}
        type="text"
        onChange={props.onChange}
      />
    </div>
    );
}

export default InputForm;