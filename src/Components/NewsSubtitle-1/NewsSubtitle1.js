import React from "react";
import './_NewsSubtitle.css'
import {processSubtitle} from "../NewsCard1";

function NewsSubtitle1(props) {
    return <div className={props.data === undefined ? '' :"news-subtitle"}>
        {props.imageUrl === undefined
            ? null
            :<img src={props.imageUrl} alt=""  className= "news-image-1"/>
        }
            {props.data === undefined ? null :processSubtitle(props.data)}
    </div>;
}

export default NewsSubtitle1;