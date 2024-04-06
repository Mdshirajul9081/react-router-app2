import React from 'react';
import{useLoaderData} from "react-router-dom"
import "./userdetials.css"
const UserDetials = () => {
    const user=useLoaderData();
    return (
        <div className='userdetials'>
            <h1>this is the userDetials  </h1>
            <h1>{user.name}</h1>
            <h2>{user.username}</h2>
            <h2>{user.id}</h2>
            <p>{user.email}</p>
            <p>{user.address.street}</p>
            <p>{user.address.zipcode}</p>
            <p>{user.address.geo.lat}</p>
           
        </div>
    );
};

export default UserDetials;