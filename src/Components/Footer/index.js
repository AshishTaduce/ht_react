import  './style.css'
import React from "react";
import ReactLogo from './comment-24px.svg'
function Footer(props){
    return(
        <div className={'footer'}>
            <SubmitBy author = {getSource(props.props.url)}/>
            <Comments
                comments = {props.props.descendants}
                points = {props.props.score}
                time = {props.props.htBatchTime}
            />
        </div>
    )
}

function getSource(url){
    url = url.replace('https://','').replace('http://','');
    url = url.split('/');
    return url[0];
}

function  SubmitBy(props) {
    return <div className={'author'}>
        Source: {props.author}
    </div>
}

function Comments(props) {
    return <div className="comments-points">
        <div className="comments">
            <img src={ReactLogo} alt="" className={'icons'}/>
            {props.comments} Comments
        </div>
        <div className="points">
            <div className="point-count">
                {props.points} points
            </div>
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

export default Footer;