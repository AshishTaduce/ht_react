import {isItPopular} from "./Components/NewsCard1";
import React from "react";
import NewsCard2 from "./Components/NewsCard2";

function createPage(newsList){
    let requiredSection = 1;
    let result = [];
    while(newsList.length > 20){
        if(requiredSection === 1){
            let temp = [];
            requiredSection++;
            let [storyBlock, newsUsed] = generateStoryBlock(newsList);
            newsList.splice(0, newsUsed);
            result.push(storyBlock);
        }
        else if(requiredSection === 2){
            requiredSection++;
            let [storyBlock, newsUsed] = generateStoryBlock(newsList);
            newsList.splice(0, newsUsed);
            result.push(storyBlock);
        }
        else if(requiredSection === 3){
            requiredSection = 1;
            let [storyBlock, newsUsed] = generateStoryBlock(newsList);
            newsList.splice(0, newsUsed);
            result.push(storyBlock);
        }
    }
    return result;
}

function generateStoryBlock(newsList){
    let popularStory = (newsItem) =>
        isItPopular(newsItem);
    let averageStory = (newsItem) =>
        !isItPopular(newsItem)
        && newsItem.htCurrentImage !== undefined;
    let smallStory = (newsItem) =>
        !isItPopular(newsItem)
        && newsItem.htCurrentImage === undefined;
    if(popularStory(newsList[0])){
        return (
            [<div className={'story-block'}>
                {NewsCard2(newsList.splice(0,1)[0], true)}
                {NewsCard2(newsList.splice(newsList.findIndex(smallStory),1)[0] ,false)}
            </div>, 2]
        );
    }
    else if(averageStory(newsList[0])){
        let news1 = newsList.splice(0,1)[0];
        let news2 = newsList.splice(newsList.findIndex(averageStory)[0], 1)[0];
        if((news1.htCurrentSubtitle !== undefined || news1.htCurrentSubtitle.length < 60) && (news1.htCurrentSubtitle !== undefined || news2.htCurrentSubtitle.length < 60)){
            return (
                [<div className={'story-block'}>
                    {NewsCard2(news1, false)}
                    {NewsCard2(news2, false)}
                    {NewsCard2(newsList.splice(newsList.findIndex(averageStory)[0], 1)[0], false)}
                </div>, 2]
            );
        }
        else return (
            [<div className={'story-block'}>
                {NewsCard2(news1, false)}
                {NewsCard2(news2, false)}
            </div>, 2]
        );
    }
    else if(smallStory(newsList[0])){
        return (
            [<div className={'story-block'}>
                {NewsCard2(newsList.splice(0,1)[0], false)}
                {NewsCard2(newsList.splice(newsList.findIndex(smallStory),1)[0], false)}
                {NewsCard2(newsList.splice(newsList.findIndex(smallStory),1)[0], false)}
            </div>, 3]
        );
    }
}

export default class SamplePage extends React.Component{
    state = {
        newsCards: undefined,
    };

    async getNews() {
        let newsUrl = `https://hacker-times.s3-us-west-1.amazonaws.com/1dayStories`;
        let response =  await fetch(newsUrl);
        let newsList = await response.json();
        let data =  newsList.top;
        let cards = await createPage(data);
        this.setState({
            newsCards: cards
        })
    }

    componentDidMount() {
        this.getNews();
    }

    render() {
        return (this.state.newsCards !== undefined
            ? <div className={"samples-list"}>
                {this.state.newsCards.map(e => e)}
              </div>
            : null);
    }
}