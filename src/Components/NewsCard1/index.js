import NewsTitle from "../NewsTitle";
import NewsSubtitle1 from "../NewsSubtitle-1/NewsSubtitle1";
import React from "react";
import './style.css'
import Footer from "../Footer";

function NewsCard1(props) {
    return props.isPopular
        ? <div className="popular-newscard">
            {props.news.htCurrentImage !== undefined ? <div className="popular-image-div">
                <img
                    src={props.news.htCurrentImage}
                    alt=""
                    className="big-image"
                />
            </div> : null}
            <div className="news-popular">
                <NewsTitle
                    title={props.news.title}
                    isPopular={false}
                />
                <NewsSubtitle1 data={props.news.htCurrentSubtitle}/>
            </div>
            <Footer props = {props.news}/>
        </div>
        : <div className={"news-card-1"}>
        <NewsTitle title={props.news.title} isPopular={false}/>
        <div className={'news-1'}>
            <NewsSubtitle1 data={processSubtitle(props.news.htCurrentSubtitle)} imageUrl = {props.news.htCurrentImage}/>
        </div>
        <Footer props = {props.news}/>
    </div>;
}

export function isItPopular(newsItem) {
    let target = new Date(newsItem.htBatchTime * 1000);
    let timeInHours = new Date().getHours() - target.getHours();
    let pointsSoFar = newsItem.score;
    if ((timeInHours < 12 && timeInHours > 0) &&
        pointsSoFar >= (timeInHours * 10)) {
        return true;
    }
    return timeInHours >= 12 && pointsSoFar >= 120;
}

export function processSubtitle(subtitle){
    if(subtitle !== undefined && subtitle.split(' ').length === 1){
        console.log('Found single long word of ', subtitle, subtitle.substring(0,10))
        return `${subtitle.substring(0, 10)}...`;
    }
    if(subtitle === undefined) return subtitle;
    else
    return subtitle.length <= 50 ? subtitle : (subtitle.substring(0,subtitle.substring(0,100).lastIndexOf(' '))+ '...');
}

export default NewsCard1;