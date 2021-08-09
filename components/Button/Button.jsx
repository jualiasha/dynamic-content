import React from 'react';

const Button = ({ type, children, disabled = false, color }) => {
    return (
        <button className={`btn btn-${color}`} type={type} disabled={disabled}>
            {children}
        </button>
    );
};

export default Button;
