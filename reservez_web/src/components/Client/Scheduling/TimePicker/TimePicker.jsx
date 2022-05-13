import React, {useEffect, useState} from "react";
import {GetTimeSlots} from "../../../../services/RestaurantService";
import CustomPill from "../../../Shared/Pill/CustomPill";
import './TimePicker.css';

const TimePicker = props => {
    const {
        restaurantId,
        date,
        action,
    } = props;
    const [timeSlots, setTimeSlots] = useState([]);

    useEffect(() => {
        GetTimeSlots(restaurantId, date)
            .then(timeSlots => {
                if (timeSlots != null){
                    setTimeSlots(timeSlots);
                }
            })
    })

    return <>
        <div className={'time-picker-container'}>
            <div className={'time-picker-wrapper'}>
                {timeSlots.length === 0 &&
                    <div>
                        <h2>Aucune disponibilités!</h2>
                    </div>
                }
                {timeSlots.map((timeslot, index) =>
                    <CustomPill
                        key={index} text={timeslot.time}
                        action={action}
                        color={timeslot.isAvailable ? 'dodgerblue' : 'orangered'}
                    />
                )}
            </div>
        </div>
    </>
}

export default TimePicker;