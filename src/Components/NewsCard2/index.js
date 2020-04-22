import NewsTitle from "../NewsTitle";
import NewsSubtitle2 from "../NewsSubtitle-2/NewsSubtitle2";
import React from "react";
import './style.css'
import Footer from "../Footer";

function NewsCard2(props) {
    return <div className={"news-card-2"}>
        <NewsTitle title={props.title} isPopular={false}/>
        <div className={'news-2'}>
            <NewsSubtitle2 data={props.htCurrentSubtitle} imageUrl = {props.htImage}/>
        </div>


        <Footer props = {props}/>
    </div>;
}

export default NewsCard2;