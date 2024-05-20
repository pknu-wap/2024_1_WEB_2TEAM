import React from "react";
import InputBoxComponent from "./login_input_component";

function InputBox() {
    return (
        <div className="input-box">
            <InputBoxComponent type="text" infoName="ID" />
            <InputBoxComponent type="password" infoName="PW" />
        </div>
    )
}

export default InputBox;