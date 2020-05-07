import React from "react";
import './_NewsSubtitle.css'
import {processSubtitle} from "../NewsCard1";

function NewsSubtitle3(props) {
    return <div className={'section-3-news'}>
            {processSubtitle(props.data)}
    </div>;
}

export default NewsSubtitle3;