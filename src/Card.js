import React from 'react'
import './Card.css'

function Card({src, title, description, price}) {
    return (
        <div className='card'>
        <img src={src} alt="CARD 1" />
        <div className="card__info">
            <h2>{title}</h2>
            <p>{description}</p>
            <h4>{price}</h4>
        </div>
            
        </div>
    )
}

export default Card
