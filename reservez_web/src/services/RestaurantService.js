import {methods, requestInit, urlBackend} from "./RequestHelper";

export async function GetAllRestaurants() {
    return await fetch(`${urlBackend}/api/Restaurants`, requestInit(methods.GET))
        .then(response => response.json());
}