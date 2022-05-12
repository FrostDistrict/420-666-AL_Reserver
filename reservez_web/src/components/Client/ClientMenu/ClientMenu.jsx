import React from "react";
import './ClientMenu.css';
import MenuItem from "../../Shared/MenuItem/MenuItem";
import {ClientBanner, RestaurantBanner01, SettingsBanner} from "../../../assets/Images/ImageIndex";

const ClientMenu = () => {

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
                    link={'/restaurants'}
                    background={ClientBanner}
                />
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