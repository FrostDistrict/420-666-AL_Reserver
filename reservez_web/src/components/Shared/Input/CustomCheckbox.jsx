import React from "react";
import './CustomCheckbox.css';

const CustomCheckbox = props => {
    const { inputId } = props;

    return <>
        <label className={'custom-checkbox-container'}>
            <input id={inputId} className={'custom-checkbox'} type={'checkbox'} name={'checkbox'}/>
            {props.children}
        </label>
    </>
}

export default CustomCheckbox;