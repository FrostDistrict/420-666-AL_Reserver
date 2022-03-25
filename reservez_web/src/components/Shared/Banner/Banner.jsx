import React from "react";
import './Banner.css';

const Banner = props => {
    const {title} = props;
    const {accent} = props;
    const {background} = props;

    return <>
        <section className={'banner-container'} style={{ backgroundImage: `url(${background})` }}>
            <div className={'banner-wrapper'}>
                <strong className={'banner-accent'}>{accent}</strong>
                <h2 className={'banner-title'}>{title}</h2>
                {props.children}
            </div>
        </section>
    </>
}

export default Banner;