import React, {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import {GetAllRestaurantsByOwner} from "../../../services/RestaurantService";
import {swalErr} from "../../../services/AlertHelper";
import ListItem from "../../Shared/ListItem/ListItem";
import {RestaurantBannerSimple} from "../../../assets/Images/ImageIndex";
import {GetUser} from "../../../services/StorageHelper";

const MyRestaurants = props => {
    const user = GetUser()
    const [ownedRestaurants, setOwnedRestaurants] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        GetAllRestaurantsByOwner(user.id)
            .then(restaurants => {
                if (restaurants != null){
                    setOwnedRestaurants(restaurants);
                }else {
                    swalErr.fire({text: 'Erreur de communication avec le backend.'}).then();
                    navigate('/Login', {replace: true});
                }
            })
    })

    return <>
        <div>
            <div>
                {ownedRestaurants.length === 0 &&
                    <div>
                        <h2>Aucun restaurants disponible!</h2>
                    </div>
                }
                {ownedRestaurants.map((restaurant, index) =>
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

export default MyRestaurants;