import React, { useEffect, useState } from 'react';
import Game from './game';
import { Link, Outlet } from "react-router-dom";






const Games = () => {

   
    const [Users, setUsers] = useState(null);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(result => setUsers(result))
    }, [])




    const getUsers = (arr) => {
       
        return arr.map((elm) => {
            return <li key={elm.id} id={elm.name}><Link to={`/games/${elm.id}`}>ID: {elm.id}, NAME: {elm.name}, EMAIL: {elm.email}</Link></li>
        })

    }

    const filterNames = (text) => {

    }

    if (!Users) {
        return null;
    }
 
   

    return (
        <div>
            
            <input onChange={() => filterNames()}/>
            <ul>
              {getUsers(Users)}
            </ul>

            
            <Outlet />

        </div>
    )


} 

export default Games;