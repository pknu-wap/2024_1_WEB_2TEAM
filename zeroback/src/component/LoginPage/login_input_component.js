import React from "react";
import './login_input_component.css';

function InputBoxComponent(probs) {
    let { infoName } = probs.infoName;
    let { type } = probs.type;

    return (
        <input type={type} placeholder={infoName} required />
    );
}

export default InputBoxComponent;