import React from "react";
import './ScheduleGrid.css';
import {getDaysInMonth} from "../../../../services/DateService";
import ScheduleGridItem from "./ScheduleGridItem";

const ScheduleGrid = () => {
    const today = new Date();
    const month = today.toLocaleString('default', { month: 'long' });
    const daysInMonth = getDaysInMonth(today.getFullYear(), today.getMonth());

    const getItems = () => {
        let items = [];
        for (let i = 0; i < daysInMonth; i++) {
            if (i+1 < today.getDate()){
                items.push(<ScheduleGridItem date={i+1} isAvailable={'non disponible'} />)
            }else{
                items.push(<ScheduleGridItem date={i+1} isAvailable={'disponible'} />)
            }
        }
        return items;
    }

    return <>
        <section className={'schedule-container'}>
            <div className={'schedule-wrapper'}>
                <div className={'schedule-header'}>
                    <h3>{month}</h3>
                </div>
                <div className={'schedule-grid'}>
                    {getItems()}
                </div>
            </div>
        </section>
    </>
}

export default ScheduleGrid;