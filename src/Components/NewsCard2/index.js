import NewsTitle from "../NewsTitle";
import NewsSubtitle2 from "../NewsSubtitle-2/NewsSubtitle2";
import React from "react";
import './style.css'
import Footer from "../Footer";
import NewsSubtitle1 from "../NewsSubtitle-1/NewsSubtitle1";

function NewsCard2(props, isItPopular) {
    return  isItPopular
        ? <div className="popular-newscard">
            <div className="big-image-div">
                <img
                    src={props.htCurrentImage}
                    alt=""
                    className="big-image"
                />
            </div>
            <div className="news-popular">
                <NewsTitle
                    title={props.title}
                    isPopular={false}
                />
                <NewsSubtitle1 data={props.htCurrentSubtitle}/>
            </div>
            <Footer props = {props}/>
        </div>
        : <div className={"news-card-2"}>
        <NewsTitle title={props.title} isPopular={false}/>
        <div className={'news-2'}>
            <NewsSubtitle2 data={props.htCurrentSubtitle} imageUrl = {props.htImage}/>
        </div>


        <Footer props = {props}/>
    </div>;
}
function isItPopular(newsItem) {
    let target = new Date(newsItem.htBatchTime * 1000);
    let timeInHours = new Date().getHours() - target.getHours();
    let pointsSoFar = newsItem.score;
    if ((timeInHours < 12 && timeInHours > 0) &&
        pointsSoFar >= (timeInHours * 10)) {
        return true;
    }
    return timeInHours >= 12 && pointsSoFar >= 120;
}

export default NewsCard2;