import React from 'react';
import { Link } from 'react-router-dom';
import "./User.css"
const User = ({user}) => {
    const {id,name,username,email}=user;
    return (
        <div className='user'>
            <h1>{name}</h1>
            <h3><Link to={`/user/${id}`}>{username}</Link></h3>
            <h3>{email}</h3>
        </div>
    );
};

export default User;