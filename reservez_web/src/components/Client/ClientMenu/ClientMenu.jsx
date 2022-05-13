import React, {useEffect, useState} from "react";
import './ClientMenu.css';
import MenuItem from "../../Shared/MenuItem/MenuItem";
import {ClientBanner, RestaurantBanner01, RestaurantBanner02, SettingsBanner} from "../../../assets/Images/ImageIndex";
import {GetAllRestaurants, GetAllRestaurantsByOwner} from "../../../services/RestaurantService";
import {swalErr} from "../../../services/AlertHelper";
import {GetUser} from "../../../services/StorageHelper";

const ClientMenu = () => {
    const user = GetUser()
    const [ownedRestaurants, setOwnedRestaurants] = useState([]);

    useEffect(() => {
        GetAllRestaurantsByOwner(user.id)
            .then(restaurants => {
                if (restaurants != null){
                    setOwnedRestaurants(restaurants);
                }
            })
    })

    return <>
        <div className={'client-menu-container'}>
            <div className={'client-menu-wrapper'}>
                <MenuItem
                    title={'Restaurants'}
                    desc={'Faite votre prochaine réservation!'}
                    link={'/restaurants'}
                    background={RestaurantBanner01}
                />
                <MenuItem
                    title={'Mes Réservations'}
                    desc={'Visionner et modifier vos réservations.'}
                    link={'/myReservations'}
                    background={ClientBanner}
                />
                {ownedRestaurants.length !== 0 &&
                    <MenuItem
                        title={'Mes Restauraunts'}
                        desc={'Visionner et modifier vos restaurants.'}
                        link={'/myRestaurants'}
                        background={RestaurantBanner02}
                    />
                }
                <MenuItem
                    title={'Paramètre'}
                    desc={'Visionner et modifier vos préférences.'}
                    link={'/restaurants'}
                    background={SettingsBanner}
                />
            </div>
        </div>
    </>
}
export default ClientMenu;