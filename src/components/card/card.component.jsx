import React from 'react';
import './card.styles.css';

export const Card = (props)=>(

    <div className = 'card-container'>
        <img alt ='face' 
        src = {`https://robohash.org/${props.figure.id}?set=set1&size=180x180`}/>

        <h2>{props.figure.name}</h2>
        <p>{props.figure.email}</p>
    </div>
);

