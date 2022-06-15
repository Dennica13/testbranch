import React from 'react';
import { useParams } from "react-router-dom";


const Game = ({id}) => {
    let params = useParams();
    console.log(params);

    return (
        <div>
            Это страница с ID: {params.gamesId}
        </div>
    )



} 

export default Game;