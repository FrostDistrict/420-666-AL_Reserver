import {methods, requestInit, urlBackend} from "./RequestHelper";
import {swalErr, Toast, toastErr} from "./AlertHelper";
import {SaveUser} from "./StorageHelper";
import {GetDateString} from "./DateService";

export async function GetAllRestaurants() {
    return await fetch(`${urlBackend}/api/Restaurants`, requestInit(methods.GET))
        .then(response => response.json());
}

export async function GetAllReservationsByUser(userId) {
    return await fetch(`${urlBackend}/api/Restaurants/Reservations?userId=${userId}`, requestInit(methods.GET))
        .then(response => response.json());
}

export async function GetAllRestaurantsByOwner(userId) {
    return await fetch(`${urlBackend}/api/Restaurants/ByOwner?userId=${userId}`, requestInit(methods.GET))
        .then(response => response.json());
}

export async function ClaimRestaurantOwnership(userId, restaurantId) {
    return await fetch(`${urlBackend}/api/Restaurants/ClaimRestaurant?userId=${userId}&restaurantId=${restaurantId}`, requestInit(methods.GET))
        .then(response => {
            return response.json().then(
                body => {
                    if (response.ok) {
                        Toast.fire({text: 'Vous êtes maintenant propriétaire!'})
                        return body;
                    }else{
                        swalErr.fire({text: (body && body.message) || response.statusText})
                    }
                    return null;
                }
            )
        });
}

export async function MakeReservation(restaurantId, userId, date, amount) {
    return await fetch(`${urlBackend}/api/Restaurants/MakeReservation?restaurantId=${restaurantId}&userId=${userId}&date=${date}&amount=${amount}`, requestInit(methods.GET))
        .then(response => {
            return response.json().then(
                body => {
                    if (response.ok) {
                        Toast.fire({text: 'Merci, votre réservation a été effectuée avec succès!'})
                        return body;
                    }else{
                        swalErr.fire({text: (body && body.message) || response.statusText})
                    }
                    return null;
                }
            )
        });
}

export async function GetTimeSlots(restaurantId, date) {
    return await fetch(`${urlBackend}/api/Restaurants/TimeSlots?restaurantId=${restaurantId}&date=${GetDateString(date)}`, requestInit(methods.GET))
        .then(response => {
            return response.json().then(
                body => {
                    if (response.ok) {
                        return body;
                    }else{
                        swalErr.fire({text: (body && body.message) || response.statusText})
                    }
                    return null;
                }
            )
        });
}