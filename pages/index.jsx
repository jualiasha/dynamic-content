import React from 'react';
import Form from '../components/Form/Form';

const loginFormFields = [
    {
        id: 'email',
        name: 'email',
        type: 'email',
        label: 'Email *',
        required: true,
    },
    {
        id: 'password',
        name: 'password',
        type: 'password',
        label: 'Password *',
        required: true,
    },
    {
        id: 'password2',
        name: 'password',
        type: 'password',
        label: 'Confirm Password *',
        required: true,
    },
];

const indexPage = () => {
    return (
        <main>
            <Form
                url="/login"
                method="POST"
                inputFields={loginFormFields}
                buttonText="Login"
            />
        </main>
    );
};

export default indexPage;
