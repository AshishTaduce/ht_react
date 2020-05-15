import React from "react";
import NewsTitle from "../Components/NewsTitle";
import NewsSubtitle1 from "../Components/NewsSubtitle-1/NewsSubtitle1";
import './Section-1.css'
import NewsCard1, {isItPopular, processSubtitle} from "../Components/NewsCard1";
import Footer from "../Components/Footer";

function Section1(props) {
    return <div className="section-1">
        <div className="popular-column">
            <div className="big-image-div" onClick={() => window.open(props.popularNews.url)}>
                {props.popularNews.htCurrentImage === undefined ? null : <img
                    src={props.popularNews.htCurrentImage}
                    alt=""
                    className="popular-image link"
                />}
            </div>
            <div className="news-popular link">
                <div className={'section1-popular-title'}>
                    <NewsTitle
                    url = {props.popularNews.url}
                    title={props.popularNews.title}
                    isPopular={true}
                /></div>
                <NewsSubtitle1 url = {props.popularNews.url} data={processSubtitle(props.popularNews.htCurrentSubtitle)}/>
            </div>
            <Footer url = {`https://news.ycombinator.com/item?id=${props.popularNews.id}`} props = {props.popularNews}/>
        </div>
        <div className={"unpopular-column story-block"}>
            {props.column1.map((newsItem) => <NewsCard1 news = {newsItem} isPopular = {isItPopular(newsItem)}/>)}
        </div>
        <div className={"unpopular-column story-block"}>
            {props.column2.map((newsItem) => <NewsCard1 isPopular = {isItPopular(newsItem)} news = {newsItem}/>)}
        </div>
    </div>;
}

export  default Section1;