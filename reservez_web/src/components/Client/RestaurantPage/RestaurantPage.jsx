import React, {useEffect, useState} from "react";
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
import CustomCheckbox from "../../Shared/Input/CustomCheckbox";
import {ReactSwal, Toast} from "../../../services/AlertHelper";
import {ClaimRestaurantOwnership} from "../../../services/RestaurantService";
import {GetScheduleFromString, IsOpen} from "../../../services/DateService";
import {BiCalendar} from "@react-icons/all-files/bi/BiCalendar";
import ScheduleGrid from "../Scheduling/ScheduleGrid/ScheduleGrid";
import Reserver from "../../Shared/Reserver/Reserver";

const RestaurantPage = () => {
    const {state} = useLocation();
    const navigate = useNavigate();
    const [restaurant, setRestaurant] = useState(state.item);
    const [schedule, setSchedule] = useState(GetScheduleFromString(restaurant.schedule));
    const user = GetUser();

    useEffect(() => {
        if (!restaurant) {
            navigate("/dashboard")
        }
    });

    const GetPriceIndex = (index) => {
        let cash = [];
        for (let i = 0; i < index; i++){
            cash.push(<GiMoneyStack key={i} color={'darkgreen'} size={25}/>)
        }
        return cash;
    }

    const ClaimThisRestaurant = () => {
        ReactSwal.fire({
            title: 'Réclamez ce restaurant?',
            input: 'password',
            inputLabel: 'Mot de passe:',
            icon: "question",
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
                ReactSwal.fire({
                    title: 'Prouvez que vous êtes le propriétaire!',
                    icon: 'warning',
                    html:
                        <CustomCheckbox inputId="checkbox-input">
                            Je suis le propriétaire.
                        </CustomCheckbox>,
                    preConfirm: () => {
                        return document.getElementById("checkbox-input").value;
                    }
                }).then((result) => {
                    if (result.isConfirmed && result.value){
                        ClaimRestaurantOwnership(user.id, restaurant.id)
                            .then((result) => {
                                if (result !== null){
                                    setRestaurant(result)
                                }
                            });
                    }
                })
            }
        });
    }

    const Reserve = () => {
        ReactSwal.fire({
            title: 'Faites une réservation',
            showCancelButton: true,
            width: '90%',
            heightAuto: false,
            showConfirmButton: false,
            showCloseButton: true,
            html: <Reserver restaurantId={restaurant.id} />,
            allowOutsideClick: () => !Swal.isLoading()
        }).then();
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
                        {(restaurant.schedule !== null) &&
                            <div>
                                <BiCalendar size={25}/>
                                <strong style={{color: (IsOpen(schedule) ? 'green' : 'red')}}>{IsOpen(schedule) ? "Ouvert" : "Fermer"}</strong>
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
                        accent={user.ownedRestaurants}
                        background={ReservedBanner}
                        action={Reserve}
                    >
                    </Banner>
                }

                {!restaurant.owned &&
                    <Banner
                        title={'Réclamez ce restaurant!'}
                        accent={'Vous êtes le propriétaire?'}
                        background={SettingsBanner}
                        action={ClaimThisRestaurant}
                    >

                    </Banner>
                }

            </div>
        }
    </>
}
export default RestaurantPage;