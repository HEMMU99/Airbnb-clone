import React from 'react'
import './Home.css'
import Banner from './Banner'
import Card from './Card'

function Home() {
    return (
        <div className= 'home'>

            <Banner />

            <div className= 'home_section'>

                <Card
                src='https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
                title= 'Room 1'
                description='Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
                price= '$200'
                 />
                 <Card
                src='https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
                title= 'Room 2'
                description='Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
                price= '$400'
                 />
                  <Card
                src='https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
                title= 'Room 3'
                description='Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
                price= '$600'
                 />

            </div>

            <div className= 'home_section'>

            <Card
                src='https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
                title= 'Room 4'
                description='Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
                price= '$800'
                 />
                  <Card
                src='https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
                title= 'Room 5'
                description='Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
                price= '$250'
                 />
                  <Card
                src='https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
                title= 'Room 6'
                description='Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
                price= '$100'
                 />

            </div>
            
        </div>
    )
}

export default Home
