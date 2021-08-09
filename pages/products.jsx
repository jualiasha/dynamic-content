import React from 'react';
import Form from '../components/Form/Form';

const productFormFields = [
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

const productPage = () => {
    return (
        <main>
            <Form
                url="/products"
                method="POST"
                inputFields={productFormFields}
                buttonText="Create Product"
            />
        </main>
    );
};

export default productPage;
