import React from 'react'
import './SearchPage.css'
import {Button} from '@material-ui/core';
import SearchResult from './SearchResult';

function SearchPage() {
    return (
        <div className="searchpage">

            <div className='searchpage__info'>
                <p>300+ stays · 8 Oct - 17 Oct</p>
                <h2>Stays in Hyderabad</h2>

                <button variant="outlined">Cancellation Flexibility </button>
                <button variant="outlined">Type Of Rooms</button>
                <button variant="outlined">Bed Rooms</button>
                <button variant="outlined">More Filters</button>
                

            </div>

            <SearchResult
                img = 'https://cdn.pixabay.com/photo/2014/07/10/17/17/hotel-389256_960_720.jpg'
                location='Entire Aprtment in London'
                title = 'Luxury triple bed Room Flat'
                description = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean porta justo vel venenatis pellentesque. Maecenas ac sem finibus, tincidunt nisi vel, fermentum mauris. Curabitur gravida nulla finibus augue auctor malesuada.'
                rating = {4.2}
                price= '$100'
                total= 'Your Total Price is $200'
                 />
                 <SearchResult
                img = 'https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
                location='Entire Aprtment in London'
                title = 'Luxury triple bed Room Flat'
                description = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean porta justo vel venenatis pellentesque. Maecenas ac sem finibus, tincidunt nisi vel, fermentum mauris. Curabitur gravida nulla finibus augue auctor malesuada.'
                rating = {4.2}
                price= '$150'
                total= 'Your Total Price is $200'
                 />
                 <SearchResult
                img = 'https://images.pexels.com/photos/3144580/pexels-photo-3144580.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
                location='Entire Aprtment in London'
                title = 'Luxury triple bed Room Flat'
                description = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean porta justo vel venenatis pellentesque. Maecenas ac sem finibus, tincidunt nisi vel, fermentum mauris. Curabitur gravida nulla finibus augue auctor malesuada.'
                rating = {4.2}
                price= '$250'
                total= 'Your Total Price is $200'
                 />
                 <SearchResult
                img = 'https://images.pexels.com/photos/1267438/pexels-photo-1267438.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
                location='Entire Aprtment in London'
                title = 'Luxury triple bed Room Flat'
                description = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean porta justo vel venenatis pellentesque. Maecenas ac sem finibus, tincidunt nisi vel, fermentum mauris. Curabitur gravida nulla finibus augue auctor malesuada.'
                rating = {5.0}
                price= '$178'
                total= 'Your Total Price is $200'
                 />
                 <SearchResult
                img = 'https://images.pexels.com/photos/271618/pexels-photo-271618.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
                location='Entire Aprtment in London'
                title = 'Luxury triple bed Room Flat'
                description = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean porta justo vel venenatis pellentesque. Maecenas ac sem finibus, tincidunt nisi vel, fermentum mauris. Curabitur gravida nulla finibus augue auctor malesuada.'
                rating = {4.8}
                price= '$78'
                total= 'Your Total Price is $200'
                 />
            
        </div>
    )
}

export default SearchPage
