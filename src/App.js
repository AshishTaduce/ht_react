import React, {useEffect, useState} from 'react';
import './App.css';
import DaysList from "./DaysList";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import {createPage} from "./designSections";

export default class App extends React.Component{
    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route path={'/'} component ={MainPage} exact={true}/>
                    {/*<Route path={process.env.PUBLIC_URL + '/samples'} component ={SamplePage} exact={true}/>*/}
                    <Route path={'/:dayNumber'} component ={MainPage} exact={true}/>
                </Switch>
            </BrowserRouter>
        );
    }
}

function MainPage(props) {
    let daysName = tabNameGenerator();
    daysName.unshift('Latest', 'Yesterday');

    let [newsCards, setNews] = useState(undefined);
    async function getNews() {
        setNews(undefined);
        console.log('getting news for day', props?.location?.state?.dayNumber);
            let newsUrl = props.location.state === undefined ? `https://hacker-times.s3-us-west-1.amazonaws.com/topStories_prod` :  `https://hacker-times.s3-us-west-1.amazonaws.com/${props.location.state.dayNumber}dayStories_prod`;
        let response =  await fetch(newsUrl);
        let newsList = await response.json();
        let data =  newsList.top;
        let cards = await createPage(data);
        setNews(cards);
    }
    useEffect(() => {
        getNews();
    },[props.location.state]);



    return (
        <div className="App">
            <head className="App-header">
                <meta charSet="UTF-8"/>
                <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
                <title>McLaren Times</title>
                <link rel="stylesheet" href="App.css"/>
                <link href="https://fonts.googleapis.com/css2?family=Roboto+Slab:wght@400;500;700&display=swap"
                      rel="stylesheet"/>
                <link href="https://fonts.googleapis.com/css2?family=Noto+Serif&display=swap"
                      rel="stylesheet"/>
                <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap" rel="stylesheet"/>
            </head>
            <div className={'main-body'}>
                <div className={'header'}>
                    <img src={require("./app-icon.png")} alt="" className={'title-icon'}/>

                    <h1 className="main-title">The McLaren Times</h1>
                </div>
                <DaysList strings={daysName}/>

                {newsCards !== undefined ? <div className={"samples-list"}>
                    {newsCards.map(e => e)}
                </div> : <div className={'loading-batch'}>Loading</div>}
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