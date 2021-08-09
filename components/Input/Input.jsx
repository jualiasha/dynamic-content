import React from 'react';

const Input = ({
    id,
    type,
    name,
    label,
    value = '',
    errorText,
    required = false,
    disabled = false,
    readonly = false,
}) => {
    return (
        <div className="form-group">
            <label className="form-label" htmlFor={id}>
                {label}
            </label>
            <input
                className="form-control"
                id={id}
                required={required}
                disabled={disabled}
                readonly={readonly}
                type={type}
                name={name}
                value={value}
            />
            {errorText && <p className="text-danger">{errorText}</p>}
        </div>
    );
};

export default Input;
