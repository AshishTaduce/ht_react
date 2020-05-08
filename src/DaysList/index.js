import * as PropTypes from "prop-types";
import React from "react";
import './style.css';
import {Link} from "react-router-dom";

function DaysList(props) {
    return (
        <div className="days-menu">
            {props.strings.map((element, index) => {
                return (<Link to={
                    {
                    pathname: `/${index + 1}`,
                    state: {
                            dayNumber: index + 1,
                        }
                    }
                } style={{ textDecoration: 'none' }} className="day-name">
                    {element.toUpperCase()}
                </Link>)
                })
            }
        </div>
    );
}

DaysList.propTypes = {
    strings: PropTypes.arrayOf(PropTypes.string),
};

export default DaysList;