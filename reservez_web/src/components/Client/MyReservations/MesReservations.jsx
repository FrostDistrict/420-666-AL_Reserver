import React, {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import {swalErr} from "../../../services/AlertHelper";
import ListItem from "../../Shared/ListItem/ListItem";
import {ReservedBanner} from "../../../assets/Images/ImageIndex";
import {GetUser} from "../../../services/StorageHelper";
import {GetAllReservationsByUser} from "../../../services/RestaurantService";

const MyReservations = props => {
    const [reservations, setReservations] = useState([]);
    const navigate = useNavigate();
    const user = GetUser();

    useEffect(() => {
        GetAllReservationsByUser(user.id)
            .then(res => {
                console.log(res)
                if (res != null){
                    setReservations(res);
                }else {
                    swalErr.fire({text: 'Erreur de communication avec le backend.'}).then();
                    navigate('/Login', {replace: true});
                }
            })
    })

    return <>
        {reservations.length === 0 &&
            <div>
                <h2>Aucune Réservation!</h2>
            </div>
        }
        {reservations.map((reservation, index) =>
            <div key={index}>
                <ListItem
                    title={reservation.restaurant.name}
                    desc={reservation.date}
                    link={'/restaurantPage'}
                    item={reservation.restaurant}
                    background={ReservedBanner}>
                </ListItem>
            </div>
        )}
    </>
}

export default MyReservations;