import NewsTitle from "../NewsTitle";
import NewsSubtitle3 from "../NewsSubtitle-3/NewsSubtitle3";
import React from "react";
import './style.css'
import Footer from "../Footer";

function NewsCard3(props) {
    return<div className={"news-card-3"}>
        {props.htCurrentImage === undefined
            ? null
            // :<div className={'news-3-image-div'}>
                :<img src={props.htCurrentImage} alt=""
                      className= "news-image-3 link"
                      onClick={() => window.open(props.url)}/>

            // </div>
        }

        <div className={'sec-3-news'}>
            <NewsTitle title={props.title} isPopular={false}/>
            <div className={'news-3'}>
                <NewsSubtitle3 data={props.htCurrentSubtitle}/>
            </div>
            <Footer props = {props}/>
        </div>
    </div>;
}

export default NewsCard3;