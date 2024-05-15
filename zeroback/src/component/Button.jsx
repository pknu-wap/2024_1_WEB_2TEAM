import React from "react";
import { Link } from "react-router-dom";

function Button({
    name,
    link
}) {
    return (
        <Link to={link} className="link">{name}</Link>
    )
}

export default Button;