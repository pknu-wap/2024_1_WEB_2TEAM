import React from "react";
import '../styles/chart_subbar_element.css';

function ChartSsubbarElement(props) {

    let { id } = props;
    let { minor_cg } = props;

    const checkOnlyOne = (checkThis) => {
        const checkboxes = document.getElementsByName("chart")
        for (let i = 0; i < checkboxes.length; i++) {
            if (checkboxes[i] !== checkThis) {
                checkboxes[i].checked = false
            }
        }

        props.setData(props.link);
        props.set_major_cg(props.major_cg);
        props.set_medium_cg(props.medium_cg);
        props.set_minor_cg(props.minor_cg);
        props.setId(props.id);
        console.log(props.id);
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