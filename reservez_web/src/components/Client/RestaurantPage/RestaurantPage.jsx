import React, {useEffect} from "react";
import './RestaurantPage.css';
import {useLocation, useNavigate} from "react-router-dom";

import {GrMapLocation} from "@react-icons/all-files/gr/GrMapLocation";
import {BiWorld} from "@react-icons/all-files/bi/BiWorld";
import {FaPhone} from "@react-icons/all-files/fa/FaPhone";
import {HiUserGroup} from "@react-icons/all-files/hi/HiUserGroup";
import {GiMoneyStack} from "@react-icons/all-files/gi/GiMoneyStack";

import LocationMap from "../../Shared/LocationMap/LocationMap";
import Banner from "../../Shared/Banner/Banner";
import PillArray from "../../Shared/Pill/PillArray";

import {
    FormatPhoneNumber,
    GetCategories,
    GetOffers
} from "../../../services/FieldHelper";

import {
    ReservedBanner,
    RestaurantBanner01,
    SettingsBanner,
} from "../../../assets/Images/ImageIndex";
import Swal from "sweetalert2";
import {Logon} from "../../../services/UserService";
import {GetUser} from "../../../services/StorageHelper";

const RestaurantPage = () => {
    const {state} = useLocation();
    const navigate = useNavigate();
    const restaurant = state.item;
    const user = GetUser();

    useEffect(() => {
        if (!restaurant) {
            navigate("/dashboard")
        }
    });

    const GetPriceIndex = (index) => {
        let cash = [];
        for (let i = 0; i < index; i++){
            cash.push(<GiMoneyStack color={'darkgreen'} size={25}/>)
        }
        return cash;
    }

    const ClaimThisRestaurant = () => {
        Swal.fire({
            title: 'Réclamez ce restaurant?',
            input: 'password',
            showCancelButton: true,
            confirmButtonText: 'Réclamez',
            preConfirm: (pwd) => {
                return Logon({
                    Email: user.email,
                    Password: pwd,
                })
            },
            allowOutsideClick: () => !Swal.isLoading()
        }).then((result) => {
            if (result.isConfirmed && result.value) {
                Swal.fire({
                    title: 'Prouvez que vous êtes le propriétaire!'
                });
            }
        });
    }

    return <>
        {restaurant &&
            <div className={'restaurant-page-container'}>

                <div className={'restaurant-page-header'} style={{ backgroundImage: `url(${RestaurantBanner01})` }}>
                    <div className={'restaurant-page-header-content'}>
                        <h2>{restaurant.name}</h2>
                        <PillArray array={GetCategories(restaurant.categories)} color={'cornflowerblue'}/>
                        <PillArray array={GetOffers(restaurant.offers)} color={'darkseagreen'}/>
                    </div>
                </div>

                <div className={'restaurant-page-desc'}>
                    <p>{restaurant.description}</p>
                </div>

                <div className={'restaurant-page-info'}>
                    <div className={'restaurant-page-contact'}>
                        <div>
                            <GrMapLocation size={25}/>
                            <strong>{`${restaurant.civicNumber} ${restaurant.streetName}, ${restaurant.city}, QC`}</strong>
                        </div>
                        {(restaurant.website !== null && restaurant.website !== '') &&
                            <div>
                                <BiWorld size={25}/>
                                <a href={`https://${restaurant.website}/`}><strong>{restaurant.website}</strong></a>
                            </div>
                        }
                        {(restaurant.phoneNumber !== null && restaurant.phoneNumber !== '') &&
                            <div>
                                <FaPhone size={25}/>
                                <a href={`tel:+1-${restaurant.phoneNumber}/`}><strong>{FormatPhoneNumber(restaurant.phoneNumber)}</strong></a>
                            </div>
                        }
                        {(restaurant.capacity !== null && restaurant.capacity !== '') &&
                            <div>
                                <HiUserGroup size={25}/>
                                <strong>Capacité: {restaurant.capacity}</strong>
                            </div>
                        }
                        <div>
                            {GetPriceIndex(restaurant.priceIndex)}
                        </div>
                    </div>
                    <LocationMap restaurant={restaurant} />
                </div>

                {restaurant.owned &&
                    <Banner
                        title={'Réservez maintenant!'}
                        background={ReservedBanner}>
                    </Banner>
                }

                {!restaurant.owned &&
                    <Banner
                        title={'Réclamez ce restaurant!'}
                        accent={'Vous êtes le propriétaire?'}
                        background={SettingsBanner}
                        action={ClaimThisRestaurant}
                    />
                }

            </div>
        }
    </>
}
export default RestaurantPage;