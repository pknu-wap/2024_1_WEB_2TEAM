import React from 'react';
import '../styles/Detail.css';
import { Link } from "react-router-dom";

function DetailComment(props) {
    var writer = props.writer;
    var date = props.date;
    var context = props.context;

    return (
        <div class="detail_page_comment_view">
            <div class="detail_page_comment_title">
                <p class="detail_page_comment_title_writer">{writer}</p>
                <p class="detail_page_comment_title_date">{date}</p>
            </div>
            <div class="detail_page_comment_contour"></div>
            <div class="detail_page_comment_context">
                <p>{context}</p>
            </div>
        </div>
    );
}

export default DetailComment;