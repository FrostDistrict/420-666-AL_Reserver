import React, {useEffect} from "react";
import './RestaurantPage.css';
import {useLocation, useNavigate} from "react-router-dom";
import {
    ReservedBanner,
    RestaurantBanner01,
} from "../../../assets/Images/ImageIndex";
import ScheduleGrid from "../Scheduling/ScheduleGrid/ScheduleGrid";
import Banner from "../../Shared/Banner/Banner";

const RestaurantPage = () => {
    const {state} = useLocation();
    const navigate = useNavigate();
    const restaurant = state.item;

    useEffect(() => {
        if (!restaurant) {
            navigate("/dashboard")
        }
    });

    return <>
        {restaurant &&
            <div className={'restaurant-page-container'}>
                <div className={'restaurant-page-header'} style={{backgroundImage: `url(${RestaurantBanner01})`}}>
                    <h2>{restaurant.name}</h2>
                    <h3>{restaurant.description}</h3>
                </div>
                <div className={'restaurant-page-content'}>
                    <div className={'restaurant-page-wrapper'}>
                        <div className={'restaurant-page-info'}>
                            <strong>Emplacement: {restaurant.location}</strong>
                            <strong>Capacité Max: {restaurant.capacity}</strong>
                        </div>

                        <Banner
                            title={'Réservez maintenant!'}
                            background={ReservedBanner}/>

                        <ScheduleGrid></ScheduleGrid>
                    </div>
                </div>
            </div>
        }
    </>
}
export default RestaurantPage;