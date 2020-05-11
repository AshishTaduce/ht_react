import {isItPopular} from "./Components/NewsCard1";
import React from "react";
import Section1 from "./Section1";
import Section2 from "./Section2";
import Section3 from "./Section3";

let popularStory = (newsItem) =>
    (isItPopular(newsItem)
        && (newsItem.htCurrentImage)
    );
let averageStory = (newsItem) =>
    (newsItem.htCurrentSubtitle !== undefined && !isItPopular(newsItem));
let smallStory = (newsItem) =>
    !isItPopular(newsItem)
    && newsItem.htCurrentImage === undefined
    && newsItem.htCurrentSubtitle === undefined;

// function doesImageLoads(imageUrl) {
//     let image = new Image();
//     image.src = imageUrl;
//     image.onload =function () {
//         return true;
//     }
//     image.onerror =function (){
//         console.log('Failed to load Image at: ',imageUrl);
//         return false;
//     }
// }

export function createPage(newsList){

    let result = [];
    while (newsList.length > 15){
        if(newsList.find(popularStory)){
            let popularNews = newsList.splice(newsList.findIndex(popularStory), 1)[0];
            let [col1] = generateStoryBlock(newsList);
            let [col2, newsUsed2] = generateStoryBlock(newsList);
            let section1 = (<div>
                <Section1 popularNews={popularNews}
                          column1={col1}
                          column2={col2}
                />
            </div>)
            newsList = newsUsed2;
            result.push(section1);
        }
        let newsItemList = [];
        for (let i = 0; i < 4; i++) {
            let [storyBlock, newNews] = generateStoryBlock(newsList);
            newsItemList.push(storyBlock);
            newsList = newNews;
        }
        let section2 = (
            <div>
                <Section2 storyBlocks={newsItemList}/>
            </div>
        );
        console.log('News Left is:', newsList.length, result.length);
        let sec3 = [newsList.splice(newsList.findIndex(averageStory), 1)[0], newsList.splice(newsList.findIndex(averageStory), 1)[0]];
        let section3 = (<div><Section3 newsItemList={sec3}/></div>);
        result.push(section2);
        result.push(section3);
    }
    return result;
}

function generateStoryBlock(newsList,){
    if(newsList.find(averageStory)){
        let news1 = newsList.splice(newsList.findIndex(averageStory), 1)[0];
        let news2 = newsList.splice(newsList.findIndex(averageStory), 1)[0];
        if(!news1.htCurrentImage || !news2.htCurrentImage) {
            return (
                [[news1,news2, newsList.splice(newsList.findIndex(averageStory), 1)[0]], newsList]
            )
        }
        return (
            [[news1, news2,], newsList]
        );
    }

    else if(newsList.find(popularStory)){
        return (
            [[newsList.splice(newsList.findIndex(popularStory),1)[0],
                newsList.splice(newsList.findIndex(averageStory),1)[0]], newsList]
        );
    }

    else if(newsList.find(smallStory)){
        return (
            [
                [newsList.splice(newsList.findIndex(smallStory),1)[0],
                    newsList.splice(newsList.findIndex(smallStory),1)[0],
                    newsList.splice(newsList.findIndex(smallStory),1)[0]]
                , newsList]
        );
    }

    else {
        console.log('Entered the last else');
        return (
            [newsList.splice(0,3)
                , newsList]
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