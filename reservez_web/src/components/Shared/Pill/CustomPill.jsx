import React from "react";
import './CustomPill.css';

const CustomPill = props => {
    const {
        text,
        color,
    } = props;

    return <>
        <div className={'pill-container'} style={{ backgroundColor: (color || 'aliceblue') }}>
            <em className={'pill-text'}>{text}</em>
        </div>
    </>
}

export default CustomPill;