import React from 'react';

import { Link, Outlet } from "react-router-dom";




const App = () => {




    return (
        <>
            <h2>Навигация:</h2>
            <nav>
                <Link to='/'>Главная</Link> | 
                <Link to='/games'>Игры</Link>
            </nav>

            <Outlet/>
            
            <div>Главная страница</div>
        </>

    )

}

export default App;