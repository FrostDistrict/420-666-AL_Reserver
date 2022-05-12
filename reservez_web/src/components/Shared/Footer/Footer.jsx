import React from "react";
import './Footer.css';
import {useNavigate} from "react-router-dom";

const Footer = () => {
    const navigate = useNavigate();

    const handleClick = (path) => {
        navigate(path, { replace: false });
    }

    return <>
        <div className={'footer-container'}>
            <div className={'footer-wrapper'}>
                <div className={'footer-menu'}>
                    <h2>menu</h2>
                    <strong onClick={() => handleClick('/dashboard')}>Accueil</strong>
                </div>
            </div>
        </div>
    </>
}

export default Footer;