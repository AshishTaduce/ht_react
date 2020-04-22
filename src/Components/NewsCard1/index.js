import NewsTitle from "../NewsTitle";
import NewsSubtitle1 from "../NewsSubtitle-1/NewsSubtitle1";
import React from "react";
import './style.css'
import Footer from "../Footer";

function NewsCard1(props) {
    return <div className={"news-card-1"}>
        <NewsTitle title={props.news.title} isPopular={false}/>
        <div className={'news-1'}>
            <NewsSubtitle1 data={props.news.htCurrentSubtitle} imageUrl = {props.news.htCurrentImage}/>
        </div>
        <Footer props = {props.news}/>
    </div>;
}



export default NewsCard1;