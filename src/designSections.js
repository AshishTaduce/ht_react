import {isItPopular} from "./Components/NewsCard1";
import React from "react";
import Section1 from "./Section1";
import Section2 from "./Section2";
import Section3 from "./Section3";
import Section4 from "./Section4";

let section3News = (newsItem) =>
    ((newsItem.htCurrentImage && newsItem.htCurrentSubtitle) || newsItem.htCurrentImage);
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

    function createSection1() {
        if(newsList.find(popularStory)){
            let popularNews = newsList.splice(newsList.findIndex(popularStory), 1)[0];
            let col1 = generateStoryBlock(newsList);
            let col2 = generateStoryBlock(newsList);
            let section1 = (<div>
                <Section1 popularNews={popularNews}
                          column1={col1}
                          column2={col2}
                />
            </div>)
            // newsList = newsUsed2;
            result.push(section1);
        }
    }

    function createSection3() {
        if(newsList.length > 1 && newsList.find(section3News)){
            let sec3 = [newsList.splice(newsList.findIndex(section3News), 1)[0], newsList.splice(newsList.findIndex(section3News), 1)[0]];
            let section3 = (<div><Section3 newsItemList={sec3}/></div>);
            result.push(section3);
        }
    }

    function createSection2() {
        if(newsList.length > 11){
            let newsItemList = [];
            for (let i = 0; i < 4; i++) {
                let storyBlock = generateStoryBlock(newsList);
                newsItemList.push(storyBlock);
                // newsList = newNews;
            }
            let section2 = (<div>
                <Section2 storyBlocks={newsItemList}/>
            </div>);
            result.push(section2);
        }
    }

    function createSection4() {
        while (newsList.length > 1){
            let sec3 = newsList.splice(0, 6);
            let section3 = (<div><Section4 newsItemList={sec3}/></div>);
            result.push(section3);
        }
    }

    while (newsList.length > 11){
        createSection1();
        createSection2();
        createSection3();
        createSection3();
        createSection2();
        console.log('News Left is:', newsList.length, result.length);
        if(newsList.find(section3News) === undefined) break;
    }
    createSection4();
    return result;
}

function generateStoryBlock(newsList,){
    if(newsList.find(averageStory)){
        let news1 = newsList.splice(newsList.findIndex(averageStory), 1)[0];
        let news2 = newsList.splice(newsList.findIndex(averageStory), 1)[0];
        if(!news1.htCurrentImage || !news2.htCurrentImage) {
            return (
                [news1,news2, newsList.splice(newsList.findIndex(averageStory), 1)[0]]
            )
        }
        return (
            [news1, news2,]
        );
    }

    else if(newsList.find(popularStory)){
        return (
            [
                newsList.splice(newsList.findIndex(popularStory),1)[0],
                newsList.splice(newsList.findIndex(averageStory),1)[0]
            ]
        );
    }

    else if(newsList.find(smallStory)){
        return (

                [
                    newsList.splice(newsList.findIndex(smallStory),1)[0],
                    newsList.splice(newsList.findIndex(smallStory),1)[0],
                    newsList.splice(newsList.findIndex(smallStory),1)[0]
                ]

        );
    }

    else {
        console.log('Entered the last else');
        return (
            newsList.splice(0,3)

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