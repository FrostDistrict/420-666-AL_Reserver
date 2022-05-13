import React from "react";
import './CustomPill.css';

const CustomPill = props => {
    const {
        text,
        color,
        action,
    } = props;

    return <>
        <div className={'pill-container'} style={{ backgroundColor: (color || 'aliceblue') }} onClick={() => action(text)}>
            <em className={'pill-text'}>{text}</em>
        </div>
    </>
}

export default CustomPill;