import React from "react";
import './LocationMap.css';
import {MapsRequest} from "../../../services/RequestHelper";

const LocationMap = (props) => {
    const {restaurant} = props;

    return <>
        <iframe
            title={'location'}
            className={'location-map'}
            frameBorder="0" style={{ border: 'none' }}
            referrerPolicy="no-referrer-when-downgrade"
            src={MapsRequest(restaurant.name, restaurant.streetName, restaurant.city)}>
        </iframe>
    </>
}

export default LocationMap;