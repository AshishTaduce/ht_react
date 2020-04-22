import React from "react";
import './_NewsSubtitle.css'

function NewsSubtitle2(props) {
    return <div className="news-subtitle">
        {props.imageUrl === undefined
            ? null
            :<img src={props.imageUrl} alt=""  className= "news-image-2"/>
        }

        {props.data}
    </div>;
}

export default NewsSubtitle2;