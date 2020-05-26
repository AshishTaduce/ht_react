import React from "react";
import NewsCard3 from "../Components/NewsCard3";
import './style.css'

export default function Section3(props) {
    let isOldNews =(newsItem) =>  newsItem?.title?.match(/\(\d{4}\)/g);

    return(
        <div className ={('section-3') + (props.newsItemList.filter(isOldNews).length === 2 ? ' old-stories-block' : '')}>
            {props.newsItemList.map((newsItem) => NewsCard3(newsItem),)}
        </div>
    );
}

