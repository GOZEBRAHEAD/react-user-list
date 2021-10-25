import React from 'react';
import "./Input.css";

const Input = ({ label, ...rest }) => {

    return (

        <div className="input__container">
            <label>{ label }</label>

            <input { ...rest } />
        </div>
    );
}

export default Input;
