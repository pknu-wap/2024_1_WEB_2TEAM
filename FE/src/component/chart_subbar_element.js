import React from "react";
import '../styles/chart_subbar_element.css';

function ChartSsubbarElement(props) {

    let { id } = props;
    let { mojor_cg } = props;
    let { medium_cg } = props;
    let { minor_cg } = props;

    const checkOnlyOne = (checkThis) => {
        const checkboxes = document.getElementsByName("chart")
        for (let i = 0; i < checkboxes.length; i++) {
            if (checkboxes[i] !== checkThis) {
                checkboxes[i].checked = false
            }
        }

        props.setData(props.link);
    }

    return (
        <div className="chart-button">

            <div id="subbar_checkbox">
                <input
                    type="checkBox"
                    name="chart"
                    value={id}
                    className="chartCheckbox"
                    onChange={(e) => checkOnlyOne(e.target)} />
                <div id="chart_name">{minor_cg}</div>
            </div>
        </div>
    );
}

export default ChartSsubbarElement