import NewsTitle from "../NewsTitle";
import NewsSubtitle2 from "../NewsSubtitle-2/NewsSubtitle2";
import React from "react";
import './style.css'
import Footer from "../Footer";
import NewsSubtitle1 from "../NewsSubtitle-1/NewsSubtitle1";

function NewsCard2(props, isItPopular) {
    return  isItPopular
        ? <div className="popular-newscard">
            <div className="popular-image-div">
                <img
                    onClick={() => window.open(props.url)}
                    src={props.htCurrentImage}
                    alt=""
                    className="big-image link"
                />
            </div>
            <div className="news-popular">
                <NewsTitle
                    url = {props.url}
                    title={props.title}
                    isPopular={false}
                />
                <NewsSubtitle1 url = {props.url} data={props.htCurrentSubtitle}/>
            </div>
            <Footer url={`https://news.ycombinator.com/item?id=${props.id}`} props = {props}/>
        </div>
        : <div className={"news-card-2"}>
        <NewsTitle url = {props.url} title={props.title} isPopular={false}/>
        <div className={'news-2'}>
            <NewsSubtitle2 url = {props.url} data={props.htCurrentSubtitle} imageUrl = {props.htImage}/>
        </div>
        <Footer url={`https://news.ycombinator.com/item?id=${props.id}`} props = {props}/>
    </div>;
}

export default NewsCard2;