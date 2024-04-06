import React from 'react';
import "./Product.css"
import { Link } from 'react-router-dom';
import{useNavigate} from 'react-router-dom';
const Product = ({product}) => {
    const {title,body,id}=product;
    const navigate=useNavigate();
    const handelNavigate=()=>{
        navigate(`/product/${id}`)
    }
    return (
        <div className='product'>
                <h1>{title}</h1>
                
                <p><Link to={`/product/${id}`}>{body}</Link></p>
                <Link to={`/product/${id}`}>
                <button>show Detials</button>
            </Link>
            <button onClick={handelNavigate} >show Detiels 2</button>

        </div>
    );
};

export default Product;