import React from 'react';
import { Link } from 'react-router-dom';

import config from './../helpers/Config';


const HeaderNav = () => {
    return (
        <nav className="navigation">
            <div className="container-fluid">
            <div className="navigation__column left">
                <div className="header__logo"><Link to="/" className="ps-logo"><img src={`${config.assets_url}images/logo.png`} alt="" /></Link></div>
            </div>
            <div className="navigation__column center">
                    <ul className="main-menu menu">
                    <li className="menu-item"><Link to="/">Home</Link></li>
                    <li className="menu-item menu-item-has-children has-mega-menu"><a href="#">Men</a>
                        <div className="mega-menu">
                        <div className="mega-wrap">
                            <div className="mega-column">
                            <ul className="mega-item mega-features">
                                <li><a href="product-listing.html">NEW RELEASES</a></li>
                                <li><a href="product-listing.html">FEATURES SHOES</a></li>
                                <li><a href="product-listing.html">BEST SELLERS</a></li>
                                <li><a href="product-listing.html">NOW TRENDING</a></li>
                                <li><a href="product-listing.html">SUMMER ESSENTIALS</a></li>
                                <li><a href="product-listing.html">MOTHER'S DAY COLLECTION</a></li>
                                <li><a href="product-listing.html">FAN GEAR</a></li>
                            </ul>
                            </div>
                            <div className="mega-column">
                            <h4 className="mega-heading">Shoes</h4>
                            <ul className="mega-item">
                                <li><Link to="/product-listing">All Shoes</Link></li>
                                <li><a href="product-listing.html">Running</a></li>
                                <li><a href="product-listing.html">Training & Gym</a></li>
                                <li><a href="product-listing.html">Basketball</a></li>
                                <li><a href="product-listing.html">Football</a></li>
                                <li><a href="product-listing.html">Soccer</a></li>
                                <li><a href="product-listing.html">Baseball</a></li>
                            </ul>
                            </div>
                            <div className="mega-column">
                            <h4 className="mega-heading">CLOTHING</h4>
                            <ul className="mega-item">
                                <li><a href="product-listing.html">Compression & Nike Pro</a></li>
                                <li><a href="product-listing.html">Tops & T-Shirts</a></li>
                                <li><a href="product-listing.html">Polos</a></li>
                                <li><a href="product-listing.html">Hoodies & Sweatshirts</a></li>
                                <li><a href="product-listing.html">Jackets & Vests</a></li>
                                <li><a href="product-listing.html">Pants & Tights</a></li>
                                <li><a href="product-listing.html">Shorts</a></li>
                            </ul>
                            </div>
                            <div className="mega-column">
                            <h4 className="mega-heading">Accessories</h4>
                            <ul className="mega-item">
                                <li><a href="product-listing.html">Compression & Nike Pro</a></li>
                                <li><a href="product-listing.html">Tops & T-Shirts</a></li>
                                <li><a href="product-listing.html">Polos</a></li>
                                <li><a href="product-listing.html">Hoodies & Sweatshirts</a></li>
                                <li><a href="product-listing.html">Jackets & Vests</a></li>
                                <li><a href="product-listing.html">Pants & Tights</a></li>
                                <li><a href="product-listing.html">Shorts</a></li>
                            </ul>
                            </div>
                            <div className="mega-column">
                            <h4 className="mega-heading">BRAND</h4>
                            <ul className="mega-item">
                                <li><a href="product-listing.html">NIKE</a></li>
                                <li><a href="product-listing.html">Adidas</a></li>
                                <li><a href="product-listing.html">Dior</a></li>
                                <li><a href="product-listing.html">B&G</a></li>
                            </ul>
                            </div>
                        </div>
                        </div>
                    </li>
                    <li className="menu-item"><a href="#">Women</a></li>
                    <li className="menu-item"><a href="#">Kids</a></li>
                    <li className="menu-item menu-item-has-children dropdown"><a href="#">News</a>
                            <ul className="sub-menu">
                            <li className="menu-item menu-item-has-children dropdown"><a href="blog-grid.html">Blog-grid</a>
                                    <ul className="sub-menu">
                                    <li className="menu-item"><a href="blog-grid.html">Blog Grid 1</a></li>
                                    <li className="menu-item"><a href="blog-grid-2.html">Blog Grid 2</a></li>
                                    </ul>
                            </li>
                            <li className="menu-item"><a href="blog-list.html">Blog List</a></li>
                            </ul>
                    </li>
                    <li className="menu-item menu-item-has-children dropdown"><a href="#">Contact</a>
                            <ul className="sub-menu">
                            <li className="menu-item"><a href="contact-us.html">Contact Us #1</a></li>
                            <li className="menu-item"><a href="contact-us.html">Contact Us #2</a></li>
                            </ul>
                    </li>
                    </ul>
            </div>
            <div className="navigation__column right">
                <form className="ps-search--header" action="do_action" method="post">
                    <input className="form-control" type="text" placeholder="Search Product…" />
                    <button><i className="ps-icon-search"></i></button>
                </form>
                <div className="ps-cart"><a className="ps-cart__toggle" href="#"><span><i>20</i></span><i className="ps-icon-shopping-cart"></i></a>
                <div className="ps-cart__listing">
                    <div className="ps-cart__content">
                    <div className="ps-cart-item"><a className="ps-cart-item__close" href="#"></a>
                        <div className="ps-cart-item__thumbnail"><a href="product-detail.html"></a><img src={`${config.assets_url}images/cart-preview/1.jpg`} alt="" /></div>
                        <div className="ps-cart-item__content"><a className="ps-cart-item__title" href="product-detail.html">Amazin’ Glazin’</a>
                        <p><span>Quantity:<i>12</i></span><span>Total:<i>£176</i></span></p>
                        </div>
                    </div>
                    <div className="ps-cart-item"><a className="ps-cart-item__close" href="#"></a>
                        <div className="ps-cart-item__thumbnail"><a href="product-detail.html"></a><img src={`${config.assets_url}images/cart-preview/2.jpg`} alt="" /></div>
                        <div className="ps-cart-item__content"><a className="ps-cart-item__title" href="product-detail.html">The Crusty Croissant</a>
                        <p><span>Quantity:<i>12</i></span><span>Total:<i>£176</i></span></p>
                        </div>
                    </div>
                    <div className="ps-cart-item"><a className="ps-cart-item__close" href="#"></a>
                        <div className="ps-cart-item__thumbnail"><a href="product-detail.html"></a><img src={`${config.assets_url}images/cart-preview/3.jpg`} alt="" /></div>
                        <div className="ps-cart-item__content"><a className="ps-cart-item__title" href="product-detail.html">The Rolling Pin</a>
                        <p><span>Quantity:<i>12</i></span><span>Total:<i>£176</i></span></p>
                        </div>
                    </div>
                    </div>
                    <div className="ps-cart__total">
                    <p>Number of items:<span>36</span></p>
                    <p>Item Total:<span>£528.00</span></p>
                    </div>
                    <div className="ps-cart__footer"><Link to="/cart" className="ps-btn" href="cart.html">Check out<i className="ps-icon-arrow-left"></i></Link></div>
                </div>
                </div>
                <div className="menu-toggle"><span></span></div>
            </div>
            </div>
        </nav>
    )
}

export default HeaderNav;