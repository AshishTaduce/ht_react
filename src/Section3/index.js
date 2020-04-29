import React from "react";
import NewsCard3 from "../Components/NewsCard3";
import './style.css'

export default function Section3(props) {
    return(
        <div className = 'section-3'>
            {props.newsItemList.map((newsItem) => NewsCard3(newsItem),)}
        </div>
    );
}

