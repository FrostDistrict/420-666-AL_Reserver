export const urlBackend = 'https://localhost:7147';
const googleApiKey = 'AIzaSyBCwEzBFWjNYJve_cwIwj963P1aYMTXbaI';
export const methods = {
    POST: 'POST',
    GET: 'GET',
    PUT: 'PUT',
    DELETE: 'DELETE'
}
export const requestInit = (method, body, isString) => {
    let value = {
        method: method,
        mode: 'cors', // no-cors, *cors, same-origin
        cache: 'no-cache',
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        }
    }

    if (body && (method === methods.POST || method === methods.PUT)) {
        if (isString)
            value['body'] = body
        else
            value['body'] = JSON.stringify(body)
    }
    return value
}

export const MapsRequest = (name, streetName, city) => {
    return `https://www.google.com/maps/embed/v1/place?key=${googleApiKey}&q=${name}+${streetName},${city}+Canada`;
}