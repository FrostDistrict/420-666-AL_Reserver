import React from "react";
import './Banner.css';

const Banner = props => {
    const {
        title,
        accent,
        background,
        classname,
        action,
    } = props;

    return <>
        <section className={'banner-container'} style={{ backgroundImage: `url(${background})` }}>
            <div className={(classname || 'banner-wrapper')} onClick={() => action()}>
                <strong className={'banner-accent'}>{accent}</strong>
                <h2 className={'banner-title'}>{title}</h2>
                {props.children}
            </div>
        </section>
    </>
}

export default Banner;