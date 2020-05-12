import * as PropTypes from "prop-types";
import React from "react";
import './style.css';
import {Link} from "react-router-dom";

function DaysList(props) {
    let active = 0;
    return (
        <div className="days-menu" key = {active}>
            {props.strings.map((element, index) => {
                return (<Link to={
                    {
                    pathname: `/${index + 1}`,
                    state: {
                            dayNumber: index + 1,
                        }
                    }
                } style={{ textDecoration: 'none' }}
                              className={`day-name ${active === index ? 'active-tab' : ''}`}
                              // onClick={() => {
                              //     active = index;
                              //     console.log(active, 'is the active tab indx');
                              // }}
                >
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