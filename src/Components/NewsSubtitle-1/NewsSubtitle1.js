import React from "react";
import './_NewsSubtitle.css'
import {processSubtitle} from "../NewsCard1";

function NewsSubtitle1(props) {
    return <div className={props.data === undefined ? '' :"news-subtitle link"}>
        {props.imageUrl === undefined
            ? null
            :<img src={props.imageUrl} alt="" onClick={() => window.open(props.url)}  className= "news-image-1 link"/>
        }
            {props.data === undefined ? null :<div className={'link'}  onClick={() => window.open(props.url)}>{processSubtitle(props.data)}</div>}
    </div>;
}

export default NewsSubtitle1;