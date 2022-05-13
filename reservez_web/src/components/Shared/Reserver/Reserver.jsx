import React, {useState} from "react";
import './Reserver.css';
import ScheduleGrid from "../../Client/Scheduling/ScheduleGrid/ScheduleGrid";
import TimePicker from "../../Client/Scheduling/TimePicker/TimePicker";
import {FaClock} from "@react-icons/all-files/fa/FaClock";
import {BiCalendar} from "@react-icons/all-files/bi/BiCalendar";
import {MakeReservation} from "../../../services/RestaurantService";
import {GetUser} from "../../../services/StorageHelper";
import CustomPill from "../Pill/CustomPill";
import {FcCheckmark} from "@react-icons/all-files/fc/FcCheckmark";

const Reserver = props => {
    const {restaurantId} = props;
    const [step, setStep] = useState('date-picker');
    const user = GetUser();

    const [date, setDate] = useState();
    const [time, setTime] = useState();

    const selectDate = (targetDate) => {
        setDate(targetDate);
        setStep('time-picker');
    }

    const selectTime = (targetTime) => {
        setTime(targetTime);
        setStep('confirm');
    }

    const confirm = () => {
        MakeReservation(restaurantId, user.id, (date.toLocaleDateString('fr') + ' - ' + time), 2)
            .then(() => {setStep('success')});
    }

    const getComponent = () => {
        if (step === 'date-picker'){
            return <ScheduleGrid select={selectDate} />
        }
        if (step === 'time-picker'){
            return <TimePicker restaurantId={restaurantId} date={date} action={selectTime} />
        }
        if (step === 'confirm'){
            return <>
                <div className={'confirm-page'}>
                    <div className={'confirm-item'}>
                        <BiCalendar size={25}/>
                        <strong>{date.toLocaleDateString('fr')}</strong>
                    </div>
                    <div className={'confirm-item'}>
                        <FaClock size={25}/>
                        <strong>{time}</strong>
                    </div>
                    <div className={'confirm-item'}>
                        <CustomPill
                            text={'Confirmer'}
                            action={confirm}
                            color={'dodgerblue'}
                        />
                    </div>
                </div>
            </>
        }
        if (step === 'succes'){
            return <>
                <div className={'confirm-page'}>
                    <div className={'confirm-item'}>
                        <FcCheckmark size={25}/>
                        <strong>Merci, votre réservation a été effectuée avec succès!</strong>
                    </div>
                </div>
            </>
        }
    }

    return <>
        {getComponent()}
    </>
}

export default Reserver;