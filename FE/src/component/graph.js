import React from "react";
import '../styles/ChartPage.css'

function Graph(probs) {
    const link = probs.link

    return (
        <iframe src={link} width="1100px" height="550px" id="chart"></iframe>
    );
}

export default Graph;