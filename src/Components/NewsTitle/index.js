import './style.css';
import React from "react";

function NewsTitle(props) {
    return <h2 className={props.isPopular ? "news-header-popular" : "news-header"}>{props.title}</h2>;
}

export default NewsTitle;