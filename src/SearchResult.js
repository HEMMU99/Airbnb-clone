import React from 'react'
import './SearchResult.css'
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import StarIcon from '@material-ui/icons/Star';

function SearchResult({
img,
location,
title,
description,
rating,
price,
total


}) {
    return (
        <div className = 'searchresult'>

            <img src={img} alt ="" />

            <FavoriteBorderIcon className='searchresult__heart' />

            <div className= 'searchResult__info'>

                <div className='searchresult__top'>

                    <p>{location}</p>
                    <h2>{title}</h2>
                        <p>____</p>
                    <p>{description}</p>

                        </div>

                        <div className='searchresult__bottom'>

                        <div className='searchresult__stars'>

                        <StarIcon className='searchResult__star' />
                        <p><strong>{rating}</strong></p>

                        </div>

                        <div className='searchresult__price'>

                        <h2>{price}</h2>
                        <p>{total}</p>

                        </div>

                        </div>


            </div>
            
        </div>
    )
}

export default SearchResult
