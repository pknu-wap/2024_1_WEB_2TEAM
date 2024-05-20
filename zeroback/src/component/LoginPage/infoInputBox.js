import React from "react";

function InfoInputBox() {
    return (
        <div className="input-box">
            <input type="text" placeholder="ID" required />
            <input type="password" placeholder="Password" required />
        </div>
    )
}

export default InfoInputBox;