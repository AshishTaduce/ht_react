import React from "react";
import './_NewsSubtitle.css'
import Truncate from "react-truncate";

function NewsSubtitle2(props) {
    return <div className="news-subtitle">
        {props.imageUrl === undefined
            ? null
            :<img src={props.imageUrl} alt=""  className= "news-image-2"/>
        }
        <Truncate lines={5} ellipsis='...' >
        {props.data}
        </Truncate>
    </div>;
}

export default NewsSubtitle2;