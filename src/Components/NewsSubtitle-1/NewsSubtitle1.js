import React from "react";
import './_NewsSubtitle.css'

function NewsSubtitle1(props) {
    return <div className={props.data === undefined ? '' :"news-subtitle"}>
        {props.imageUrl === undefined
            ? null
            :<img src={props.imageUrl} alt=""  className= "news-image-1"/>
        }
        {props.data === undefined ? null :props.data}
    </div>;
}

export default NewsSubtitle1;