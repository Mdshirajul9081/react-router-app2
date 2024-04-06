import React from 'react';
import {useLoaderData} from 'react-router-dom';
import Product from '../Product/Product';
const Products = () => {
    const products=useLoaderData();
    return (
        <div>
            <h1>this is the product section:{products.length}</h1>
            {
                products.map(product=><Product key={product.id} product={product}></Product>)
            }
        </div>
    );
};

export default Products;