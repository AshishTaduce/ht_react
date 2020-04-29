import React from "react";
import './_NewsSubtitle.css'
import Truncate from "react-truncate";

function NewsSubtitle3(props) {
    return <div className={'section-3-news'}>
        <Truncate lines={5} ellipsis='...'>

            {props.data}
        </Truncate>
    </div>;
}

export default NewsSubtitle3;