import React from 'react'
import './Header.css'
import SearchIcon from '@material-ui/icons/Search';
import LanguageIcon from '@material-ui/icons/Language';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import {Avatar} from '@material-ui/core';
import {Link} from 'react-router-dom';

function Header() {
    return (
        <div className= "header">
            <Link to='/'>
                <img className='header__logo'
                src="https://d1.awsstatic.com/product-marketing/rds/airbnb_horizontal_lockup_web.bd87ed2c8e964eb35463744e07a1a0670177bda2.png"
                alt="clone of airbnb logo" />

            </Link>
            <div className="header__center">
            <input type="text" />
            <SearchIcon />
            </div>

            <div className="header__right">
                <p>Become A Host</p>
                <LanguageIcon />
                <ExpandMoreIcon />
                <Avatar />
            </div>

        </div>
    )
}

export default Header
