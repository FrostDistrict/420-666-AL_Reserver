import React, {useEffect, useState} from "react";
import './ScheduleGrid.css';
import {GetDaysOfMonth, GetMonthName} from "../../../../services/DateService";
import ScheduleGridItem from "./ScheduleGridItem";
import {AiOutlineArrowLeft} from "@react-icons/all-files/ai/AiOutlineArrowLeft";
import {AiOutlineArrowRight} from "@react-icons/all-files/ai/AiOutlineArrowRight";

const ScheduleGrid = (props) => {
    const {select} = props;

    const today = new Date();
    const [targetDate, setTargetDate] = useState(today);
    const [items, setItems] = useState(GetDaysOfMonth(today));

    const previousMonth = () => {
        setTargetDate(new Date(targetDate.getFullYear(), targetDate.getMonth() - 1, targetDate.getDate()));
        setItems(GetDaysOfMonth(targetDate));
    }

    const nextMonth = () => {
        setTargetDate(new Date(targetDate.getFullYear(), targetDate.getMonth() + 1, targetDate.getDate()));
        setItems(GetDaysOfMonth(targetDate));
    }

    return <>
        <section className={'schedule-container'}>
            <div className={'schedule-wrapper'}>
                <div className={'schedule-header'}>
                    <AiOutlineArrowLeft size={25} className={'schedule-arrow'} onClick={previousMonth} />
                    <h3>{GetMonthName(targetDate)} - {targetDate.getFullYear()}</h3>
                    <AiOutlineArrowRight size={25} className={'schedule-arrow'} onClick={nextMonth} />
                </div>
                <div className={'schedule-grid'}>
                    {items.map((date, index) =>
                        <ScheduleGridItem key={index} date={date} action={select}/>
                    )}
                </div>
            </div>
        </section>
    </>
}

export default ScheduleGrid;