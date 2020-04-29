import  './style.css'
import React from "react";
import ReactLogo from './comment-24px.svg'
export default function Footer(props){
    return(
        <div className={'footer'}>
            <div className={'author'}>
                <div>{getSource(props.props.url)}</div>
                <div className="point-count">
                    {props.props.score} points
                </div>
            </div>
            <Comments
                comments = {props.props.descendants}
                time = {props.props.htBatchTime}
            />
        </div>
    )
}

function getSource(url){
    if(url === undefined) return '';
    url = url.replace('https://','').replace('http://','');
    url = url.split('/');
    return url[0];
}

// function  SubmitBy(props) {
//     return
// }

function Comments(props) {
    return <div className="comments-points">
        <div className="comments">
            <img src={ReactLogo} alt="" className={'icons'}/>
            {props.comments} Comments
        </div>
        <div className="points">

            <div className="time-published">
                {processDate(props.time)} ago
            </div>
        </div>
    </div>
}

function processDate(targetTime){
    let target = new Date(targetTime * 1000);
    let days = new Date().getDate() - target.getDate();
    let hours = new Date().getHours() - target.getHours();
    let minutes = new Date().getMinutes() - target.getMinutes();
    console.log(days, hours, minutes);
    if(days > 0){
        return days + ' days';
    }
    else if(hours > 0){
        return hours + ' hours';
    }
    else{
        return minutes + ' minutes';
    }
}