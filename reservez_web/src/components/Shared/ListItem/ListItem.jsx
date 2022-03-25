import React from "react";
import './ListItem.css';
import {useNavigate} from "react-router-dom";

const ListItem = props => {
    const {title, desc, link, item, background} = props;
    const navigate = useNavigate();

    const handleClick = () => {
        navigate(link, { state: { item: item } });
    }

    return <>
        <section className={'list-item-container'} style={{ backgroundImage: `url(${background})` }}>
            <div className={'list-item-wrapper'} onClick={handleClick}>
                <h2 className={'list-item-title'}>{title}</h2>
                <strong className={'list-item-desc'}>{desc}</strong>
                {props.children}
            </div>
        </section>
    </>
}
export default ListItem;