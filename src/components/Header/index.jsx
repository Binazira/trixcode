import React from 'react';
import logo from "../../assets/icons/logo.svg"
import user from "../../assets/icons/user.svg"
import humburger from "../../assets/icons/humburger.svg"
import "./style.scss"

const Header = () => {
    return (
        <header className='header'>
            <div className='header__logo'>
                <img className='logo' src={logo} alt="trixcode" />
            </div>
            <div className='header__user'>
                <a href="#">
                    <img src={user} alt="user" />
                </a>
            </div>
            <div className='header__burger'>
                    <img src={humburger} alt="humburger button" />
            </div>
        </header>
    );
};

export default Header;