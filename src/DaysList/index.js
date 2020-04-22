import * as PropTypes from "prop-types";
import React from "react";
import './style.css';

function DaysList(props) {
    return (
        <div className="days-menu">
            {props.strings.map((element) => {
                return (<div className="day-name">{element[0].toUpperCase()}</div>)
            })}
        </div>
    );
}

DaysList.propTypes = {
    strings: PropTypes.arrayOf(PropTypes.string),
};

export default DaysList;