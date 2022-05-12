import React, {useEffect, useState} from "react";
import {GetAllRestaurants} from "../../../services/RestaurantService";
import {swalErr} from "../../../services/AlertHelper";
import {useNavigate} from "react-router-dom";
import {RestaurantBannerSimple} from "../../../assets/Images/ImageIndex";
import ListItem from "../../Shared/ListItem/ListItem";

const Restaurants = props => {
    const [restaurants, setRestaurants] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        GetAllRestaurants()
            .then(restaurants => {
                if (restaurants != null){
                    setRestaurants(restaurants);
                }else {
                    swalErr.fire({text: 'Erreur de communication avec le backend.'}).then();
                    navigate('/Login', {replace: true});
                }
            })
    })

    return <>
        <div className={'restaurants-container'}>
            <div className={'restaurants-wrapper'}>
                {restaurants.length === 0 &&
                    <div>
                        <h2>Aucun restaurants disponible!</h2>
                    </div>
                }
                {restaurants.map((restaurant, index) =>
                    <div key={index}>
                        <ListItem
                            title={restaurant.name}
                            desc={restaurant.description}
                            link={'/restaurantPage'}
                            item={restaurant}
                            background={RestaurantBannerSimple}>
                        </ListItem>
                    </div>
                )}
            </div>
        </div>
    </>
}
export default Restaurants;