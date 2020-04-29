import React, {useEffect, useState} from 'react';
import './App.css';
import DaysList from "./DaysList";
import Section1 from "./Section1";
import Section2 from "./Section2";
import Section3 from "./Section3";
import * as PropTypes from "prop-types";

// function imageExists(url, callback) {
//     let img = new Image();
//     img.onload = function() { return(true); };
//     img.onerror = function() { return(false); };
//     img.src = url;
// }

function NewsPage(props) {
    console.log('Inside news card with props:', props);
    return <>
        {props.news === undefined
            ? <div>Loading news...</div>
            : <div>
                <Section1
                    popularNews={(props.news.splice(
                            props.news.findIndex((element) => element.htCurrentImage !== undefined && isItPopular(element)),
                            1)[0]
                    )}
                    newsItemList={props.news.splice(0, 6)}
                />

                <Section2 newsItemList={props.news.splice(0, 4)}/>

                <Section3 newsItemList={props.news.splice(0, 2)}/>
            </div>
        }
    </>;
}

NewsPage.propTypes = {
    news: PropTypes.func,
    predicate: PropTypes.func
};

export default function App() {
    let daysName = tabNameGenerator();
    daysName.unshift('Latest', 'Yesterday');

    let [news, setNews] = useState();
    let [day, setDay] = useState();
    useEffect(getNews, [1]);

    function updateDay(num){
        console.log('update day');
        setDay(num);
        getNews();
    }

    async function getNews() {
        setNews(undefined);

        console.log(day, 'Day number');
        let response =  await fetch(`https://hacker-times.s3-us-west-1.amazonaws.com/${day === undefined ? 1 : day}dayStories`);
        // let response = await fetch('https://hacker-times.s3-us-west-1.amazonaws.com/3dayStories');
        let newsList = await response.json();
        let data =  newsList.top;
        // data = data.filter((e) => isItPopular(e));
        setNews(data);
    }

    return (
        <div className="App">
            <head className="App-header">
                <meta charSet="UTF-8"/>
                <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
                <title>McLaren Times</title>
                <link rel="stylesheet" href="style.css"/>
                <link href="https://fonts.googleapis.com/css2?family=Roboto+Slab:wght@400;500;700&display=swap"
                      rel="stylesheet"/>
                <link href="https://fonts.googleapis.com/css2?family=Noto+Serif&display=swap"
                      rel="stylesheet"/>
            </head>
            <div className={'main-body'}>
                <h1 className="main-title">McLaren Times</h1>
                <DaysList strings={daysName} callbackFn={setDay.bind(this)}/>
                <NewsPage news={news}/>
            </div>
        </div>
    );
}

function tabNameGenerator() {
    let result = [];
    let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    for (let i = 2; i < 7; i++) {
        let temp = new Date();
        result.push(
            `${days[new Date(temp.setDate(temp.getDate() - i)).getDay()]}`
        );
    }
    console.log('Days list:', result);
    return result;
}

function isItPopular(newsItem) {
    let target = new Date(newsItem.htBatchTime * 1000);
    let timeInHours = new Date().getHours() - target.getHours();
    let pointsSoFar = newsItem.score;
    if ((timeInHours < 12 && timeInHours > 0) &&
        pointsSoFar >= (timeInHours * 10)) {
        return true;
    }
    return timeInHours >= 12 && pointsSoFar >= 120;
}