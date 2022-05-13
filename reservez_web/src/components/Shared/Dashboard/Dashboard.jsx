import React, {useEffect} from "react";
import './Dashboard.css';
import {GetUser} from "../../../services/StorageHelper";
import {useNavigate} from "react-router-dom";
import ClientMenu from "../../Client/ClientMenu/ClientMenu";


const Dashboard = () => {
    let user = GetUser();
    const navigate = useNavigate();

    useEffect(() => {
        if (!user) {
            navigate("/Login")
        }
    });

    const getMenu = () => {
        if (user.role === 0){
            return <ClientMenu />;
        }
        if (user.role === 1){
            return <ClientMenu />;
        }
    }

    return <>
        {
            user &&
            <div className={'dashboard-container'}>
                <div className={'dashboard-wrapper'}>
                    { getMenu() }
                </div>
            </div>
        }
    </>
}

export default Dashboard;