import * as PropTypes from "prop-types";
import React from "react";
import './style.css';

function DaysList(props) {
    return (
        <div className="days-menu">
            {props.strings.map((element, index) => {
                return (<div className="day-name" onClick={
                    props.callbackFn(index + 1)}>{element.toUpperCase()}</div>)
                })
            }
        </div>
    );
}

DaysList.propTypes = {
    strings: PropTypes.arrayOf(PropTypes.string),
};

export default DaysList;