import React, { useState } from 'react';
import Input from '../Input/Input';
import Button from '../Button/Button';

const Form = ({ url, method, inputFields, buttonText }) => {
    const [formstate, setFormState] = useState({});

    const submitHandler = async (event) => {
        event.preventDefault();

        // Default options are marked with *
        const response = await fetch(url, {
            method: method, // *GET, POST, PUT, DELETE, etc.
            mode: 'cors', // no-cors, *cors, same-origin
            cache: 'default', // *default, no-cache, reload, force-cache, only-if-cached
            credentials: 'same-origin', // include, *same-origin, omit
            headers: {
                'Content-Type': 'application/json',
                // 'Content-Type': 'application/x-www-form-urlencoded',
            },
            redirect: 'follow', // manual, *follow, error
            referrerPolicy: 'no-referrer-when-downgrade', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
            body: JSON.stringify(loginFormState), // body data type must match "Content-Type" header
        });
        const res = await response.json();
        console.log(res);
    };
    return (
        <form onSubmit={submitHandler}>
            <div className="container">
                <div className="row d-flex justify-content-center">
                    {inputFields.map((input) => {
                        return (
                            <Input
                                key={input.id}
                                id={input.id}
                                name={input.name}
                                type={input.type}
                                label={input.label}
                                required={input.required}
                            />
                        );
                    })}
                    <div className="col-md-6">
                        <Button type="submit" color="success">
                            {buttonText}
                        </Button>
                    </div>
                </div>
            </div>
        </form>
    );
};

export default Form;
