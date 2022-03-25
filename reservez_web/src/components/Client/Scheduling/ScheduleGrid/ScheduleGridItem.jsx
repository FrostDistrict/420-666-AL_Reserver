import React from "react";
import './ScheduleGrid.css';

const ScheduleGridItem = props => {
    const {date, isAvailable} = props;

    return <>
        <div className={'article-grid-item'}>
            <h3>{date}</h3>
            <p>{isAvailable}</p>
        </div>
    </>
}

export default ScheduleGridItem;