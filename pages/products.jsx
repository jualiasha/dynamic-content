import React from 'react';
import Form from '../components/Form/Form';

const productFormFields = [
    {
        id: 'name',
        name: 'name',
        type: 'text',
        label: 'Product Name *',
        required: true,
    },
    {
        id: 'description',
        name: 'description',
        type: 'text',
        label: 'Description *',
        required: true,
    },
    {
        id: 'price',
        name: 'price',
        type: 'text',
        label: 'Price *',
        required: true,
    },
    {
        id: 'picture',
        name: 'picture',
        type: 'text',
        label: 'Picture url *',
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
