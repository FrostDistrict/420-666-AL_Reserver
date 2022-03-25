import React from "react";
import './Home.css';
import Login from "./Login/Login";


const Home = () => {

    return <>
        <div className={'home-container'}>
            <div className={'home-wrapper'}>
                <Login/>
            </div>
        </div>
    </>
}

export default Home;