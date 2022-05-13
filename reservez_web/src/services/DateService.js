import {Schedule} from "../models/Schedule";

export function GetDateString(date) {
    return `${date.getFullYear()}-${date.getMonth()}-${date.getDate()}`
}

export function GetDaysInMonth(month, year) {
    return new Date(year, month+1, 0).getDate();
}

export function GetMonthName(date) {
    return date.toLocaleDateString('fr', { month: 'long' });
}

export function GetScheduleFromString(str) {
    let schedule = new Schedule();

    if (str === null || str.length === 0){
        return schedule;
    }

    let timeSlots = str.split(',');

    if (timeSlots.length === 1){
        for (let key in schedule.week){
            schedule.week[key] = timeSlots[0];
        }
        return schedule;
    }

    if (timeSlots.length === 3){
        for (let key in schedule.week){
            if (key !== 'Samedi' && key !== 'Dimanche'){
                schedule.week[key] = timeSlots[0];
            }
        }
        schedule.week['Samedi'] = timeSlots[1];
        schedule.week['Dimanche'] = timeSlots[2];
        return schedule;
    }

    if (timeSlots.length === 7){
        let idx = 0;
        for (let key in schedule.week){
            schedule.week[key] = timeSlots[idx];
            idx++;
        }
        return schedule;
    }
}

export function GetDaysOfMonth(targetDate) {
    let items = [];
    for (let i = 0; i < GetDaysInMonth(targetDate.getMonth(), targetDate.getFullYear()); i++) {
        items.push(new Date(targetDate.getFullYear(), targetDate.getMonth() + 1, i+1));
    }
    return items;
}

export function IsOpen(schedule){
    const today = new Date();
    const timeslot = schedule.week[today.toLocaleDateString('fr', { weekday: 'long' })].split("-");
    return today.getHours() > Number(timeslot[0]) && today.getHours() < Number(timeslot[1]);
}