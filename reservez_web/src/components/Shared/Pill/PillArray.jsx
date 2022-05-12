import React from "react";
import './CustomPill.css';
import CustomPill from "./CustomPill";

const PillArray = props => {
    const {
        array,
        color,
    } = props;

    return <>
        <div className={'pill-array-container'}>
            {array.map((text, index) =>
                <CustomPill key={index} text={text} color={color}/>
            )}
        </div>
    </>
}

export default PillArray;