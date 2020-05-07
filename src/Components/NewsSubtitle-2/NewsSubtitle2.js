import React from "react";
import './_NewsSubtitle.css'
import Truncate from "react-truncate";
import {processSubtitle} from "../NewsCard1";

function NewsSubtitle2(props) {
    return <div className="news-subtitle">
        {props.imageUrl === undefined
            ? null
            :<img src={props.imageUrl} alt=""  className= "news-image-2"/>
        }
        {processSubtitle(props.data)}
    </div>;
}

export default NewsSubtitle2;