import React from 'react';
import logo from "../../assets/icons/logo.svg"
import user from "../../assets/icons/user.svg"
import humburger from "../../assets/icons/humburger.svg"
import arrow from "../../assets/icons/arrow.svg"
import "./style.scss"

const Header = () => {
    return (
        <header className='header'>
            <div className='header__logo mobile'>
                <img className='logo' src={logo} alt="trixcode" />
            </div>
            <div className='header__user mobile'>
                <a href="#">
                    <img src={user} alt="user" />
                </a>
            </div>
            <div className='header__burger mobile'>
                    <img src={humburger} alt="humburger button" />
            </div>

            <div className="brand">

                <div className='header__logo'>
                    <img className='logo' src={logo} alt="trixcode" />
                </div>
                <a className='brand__item bold-font' href="#">individuals</a>
                <a className='brand__item' href="#">Companies</a>

            </div>
            
            <nav className='nav'>
                <ul className="nav-menu">
                    <li className="nav-menu__item">Courses 
                        <img className='dropdown-menu' src={arrow} alt="dropdown-menu" />
                    </li>
                    <li className="nav-menu__item">
                        <a href="#">Log in</a>
                    </li>
                    <li className="nav-menu__item">
                        <button className='nav-menu__btn'>subscribe</button>
                    </li>
                </ul>
            </nav>


        </header>
    );
};

export default Header;