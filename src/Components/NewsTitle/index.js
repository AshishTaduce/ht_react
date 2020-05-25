import './style.css';
import React from "react";

function NewsTitle(props) {
    if(props.title.match(/\(\d{4}\)/g))console.log(props.title);
    return <h2
        className={(props.isPopular ? "news-header-popular" : "news-header" )}>
        <div onClick={() => {
            window.open(props.url);
        }} className={'heading link'}
        >{props.title}</div>
    </h2>;
}

export default NewsTitle;