import React from "react";
import NewsTitle from "../Components/NewsTitle";
import NewsSubtitle1 from "../Components/NewsSubtitle-1/NewsSubtitle1";
import './Section-1.css'
import NewsCard1 from "../Components/NewsCard1";

function Section1(props) {
    let subs = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo non quod assumenda, sed, ut nisi\n' +
        'tempore excepturi commodi, voluptas aliquid reprehenderit. Molestias, ipsum magnam.';
    return <div className="section-1">
        <div className="popular-column">
            <div className="big-image-div">
                <img
                    src={props.popularNews.htCurrentImage}
                    alt=""
                    className="big-image"
                />
            </div>


            <div className="news-popular">
                <NewsTitle
                    title={props.popularNews.title}
                    isPopular={true}
                />
                <NewsSubtitle1 data={props.popularNews.htCurrentSubtitle}/>

            </div>
        </div>
        <div className={"unpopular-column"}>
            {props.newsItemList.splice(0,3).map((newsItem) => <NewsCard1 news = {newsItem}/>)}
        </div>
        <div className={"unpopular-column"}>
            {props.newsItemList.splice(0,3).map((newsItem) => <NewsCard1 news = {newsItem}/>)}
        </div>
    </div>;
}

export  default Section1;