import React, { useState } from 'react';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import VideoCallIcon from '@material-ui/icons/VideoCall';
import AppsIcon from '@material-ui/icons/Apps';
import NotificationsIcon from '@material-ui/icons/Notifications';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import { Link } from 'react-router-dom'
import './Header.css'
const Header = () => {
    const [inputSearch, setInputSearch] = useState("")

    const handleChange = (e) => {
        try {
            e.preventDefault();
            setInputSearch(e.target.value)

        } catch (error) {
            console.log(error)
        }


    }
    return (
        <div className="header" >
            <div className="header__left">
                <MenuIcon />
                <Link exact to='/'>
                    <img className="header__logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/YouTube_Logo_%282013-2017%29.svg/640px-YouTube_Logo_%282013-2017%29.svg.png" alt="Youtube icon" />

                </Link>
            </div>
            <div className="header__input">
                <input value={inputSearch} onChange={handleChange} type="text" placeholder="Search" className="inputField" required />
                <Link to={`/search/${inputSearch}`}>
                    <SearchIcon type="submit" className="header__inputButton" />
                </Link>

            </div>
            <div className="header__icons">
                <VideoCallIcon className="header__icon" />
                <AppsIcon className="header__icon" />
                <NotificationsIcon className="header__icon" />
                <AccountCircleIcon />

            </div>
        </div>

    )
}

export default Header
