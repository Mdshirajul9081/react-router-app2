import React from 'react';
import{useLoaderData}from 'react-router-dom';
const ProductDetials = () => {
    const product=useLoaderData();
    return (
        <div>
            <h1>this is the product detials </h1>
            <h1>{product.body}</h1>
            <p>{product.title}</p>
        </div>
    );
};

export default ProductDetials;