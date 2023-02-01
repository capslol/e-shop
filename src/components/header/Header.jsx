import React from 'react';
import './Header.css'

import logo_icon from './img/logo.svg'

import home_icon from './img/2.svg'
import cart_icon from './img/cart.svg'
import catalog_icon from './img/3.svg'
import promo_icon from './img/promo.svg'
import {Link} from "react-router-dom";


const Header = () => {
    return (
        <header className='header'>

            <div className="header-logo">

            </div>
            <div className="header-nav">
                <Link to={'/form'} className="header-nav__item header-logo">
                    <img className='header-img' src={logo_icon} alt=""/>
                </Link>

                <Link to={'/home'} className="header-nav__item">
                    <img className='header-img' src={home_icon} alt=""/>
                    <span>Page d'accueil</span>
                </Link>
                <Link to={''} className="header-nav__item">
                    <img className='header-img' src={catalog_icon} alt=""/>
                    <span>CataLOGUE</span>
                </Link>
                <Link to={''} className="header-nav__item">
                    <img className='header-img' src={cart_icon} alt=""/>
                    <span>PANIER</span>
                </Link>
                <Link to={''} className="header-nav__item">
                    <img className='header-img' src={promo_icon} alt=""/>
                    <span>PROMO</span>
                </Link>

            </div>


        </header>
    );
};

export default Header;