import React from "react";
import NewsTitle from "../Components/NewsTitle";
import NewsSubtitle1 from "../Components/NewsSubtitle-1/NewsSubtitle1";
import './Section-1.css'
import NewsCard1, {isItPopular, processSubtitle} from "../Components/NewsCard1";
import Footer from "../Components/Footer";

function Section1(props) {
    return <div className="section-1">
        <div className="popular-column">
            <div className="big-image-div">
                {props.popularNews.htCurrentImage === undefined ? null : <img
                    src={props.popularNews.htCurrentImage}
                    alt=""
                    className="popular-image"
                />}
            </div>
            <div className="news-popular">
                <NewsTitle
                    title={props.popularNews.title}
                    isPopular={true}
                />
                <NewsSubtitle1 data={processSubtitle(props.popularNews.htCurrentSubtitle)}/>
            </div>
            <Footer props = {props.popularNews}/>
        </div>
        <div className={"unpopular-column"}>
            {props.column1.map((newsItem) => <NewsCard1 news = {newsItem} isPopular = {isItPopular(newsItem)}/>)}
        </div>
        <div className={"unpopular-column"}>
            {props.column2.map((newsItem) => <NewsCard1 isPopular = {isItPopular(newsItem)} news = {newsItem}/>)}
        </div>
    </div>;
}

export  default Section1;