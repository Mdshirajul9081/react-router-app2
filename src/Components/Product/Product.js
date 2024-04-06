import React from 'react';
import "./Product.css"
import { Link } from 'react-router-dom';
const Product = ({product}) => {
    const {title,body,id}=product;
    return (
        <div className='product'>
                <h1>{title}</h1>
                
                <p><Link to={`/product/${id}`}>{body}</Link></p>
                <Link to={`/product/${id}`}>
                <button>show Detials</button>
            </Link>
        </div>
    );
};

export default Product;