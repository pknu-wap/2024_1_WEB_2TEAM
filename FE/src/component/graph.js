import React from "react";

function Graph(probs) {
    const link = probs.link

    return (
        <iframe src={link} width="1100px" height="550px"></iframe>
    );
}

export default Graph;