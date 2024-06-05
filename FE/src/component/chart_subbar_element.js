import React from "react";
import '../styles/chart_subbar_element.css';

function ChartSsubbarElement(props) {

    const checkOnlyOne = (checkThis) => {
        const checkboxes = document.getElementsByName("chart")
        for (let i = 0; i < checkboxes.length; i++) {
            if (checkboxes[i] !== checkThis) {
                checkboxes[i].checked = false
            }
        }
    }

    let { id } = props;
    let { mojor } = props;
    let { medium } = props;
    let { name } = props;
    let { link } = props;

    return (
        <div className="chart-button">
            <input
                type="checkBox"
                name="chart"
                value={id}
                className="chartCheckbox"
                onChange={(e) => checkOnlyOne(e.target)} />
            <div className="sub-button-name" id="small">{name}</div>
        </div>
    );
}

export default ChartSsubbarElement