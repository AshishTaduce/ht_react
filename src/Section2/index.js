import React from "react";
import NewsCard2 from "../Components/NewsCard2";
import './style.css'
import NewsCard1, {isItPopular} from "../Components/NewsCard1";

function Section2(props) {
    return(
        <div className = 'section-2'>
            {props.storyBlocks.map((storyBlock) => <div className={"story-block"}>
                {storyBlock.map((newsItem) => NewsCard2(newsItem, isItPopular(newsItem)))}
            </div>)}
        </div>
    );
}
export default Section2;