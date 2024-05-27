import React from "react";
import { Link } from "react-router-dom";
import './indexChartSubbar.css';

function checkOnlyOne(checkThis) { // 하나만 체크되게 만드는 함수
    const checkboxes = document.getElementsByName('test')
    for (let i = 0; i < checkboxes.length; i++) {
        if (checkboxes[i] !== checkThis) {
            checkboxes[i].checked = false
        }
    }
}

function SubBar() {
    return (
        <div id="subbar">
            <div id="subbar-classification">
                {/* 구현 예정 */}
            </div>
        </div>
    );
}

export default SubBar;