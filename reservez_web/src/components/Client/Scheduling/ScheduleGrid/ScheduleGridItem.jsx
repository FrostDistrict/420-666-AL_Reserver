import React from "react";
import './ScheduleGrid.css';

const ScheduleGridItem = props => {
    const {date, action} = props;

    return <>
        <div className={'article-grid-item'} onClick={() => action(date)}>
            <h3>{date.getDate()}</h3>
            <p></p>
        </div>
    </>
}

export default ScheduleGridItem;