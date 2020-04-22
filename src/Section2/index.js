import React from "react";
import NewsCard2 from "../Components/NewsCard2";
import './style.css'

function Section2(props) {
    return(
        <div className = 'section-2'>
            {props.newsItemList.map((newsItem) => NewsCard2(newsItem),)}
        </div>
    );
}
export default Section2;