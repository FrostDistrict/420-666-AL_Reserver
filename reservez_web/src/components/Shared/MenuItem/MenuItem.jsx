import React from "react";
import './MenuItem.css';
import {useNavigate} from "react-router-dom";

const MenuItem = props => {
    const {title, desc, link, background} = props;
    const navigate = useNavigate();

    const handleClick = () => {
        navigate(link, { replace: false });
    }

    return <>
        <section className={'menu-item-container'} style={{ backgroundImage: `url(${background})` }}>
            <div className={'menu-item-wrapper'} onClick={handleClick}>
                <strong className={'menu-item-desc'}>{desc}</strong>
                <h2 className={'menu-item-title'}>{title}</h2>
                {props.children}
            </div>
        </section>
    </>
}
export default MenuItem;