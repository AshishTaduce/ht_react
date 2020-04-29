import React from "react";
import './_NewsSubtitle.css'
import Truncate from 'react-truncate';

function NewsSubtitle1(props) {
    return <div className={props.data === undefined ? '' :"news-subtitle"}>
        {props.imageUrl === undefined
            ? null
            :<img src={props.imageUrl} alt=""  className= "news-image-1"/>
        }
        <Truncate lines={5} ellipsis='...' >
            {props.data === undefined ? null :props.data}
        </Truncate>
    </div>;
}

export default NewsSubtitle1;