import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import axios from 'axios';
//import jQuery from 'jquery';

import config from './../helpers/Config';
import { toNormalArrayObject, number_format }  from '../helpers/Utilities';
//import { reloadCart } from './../actions';

const HeaderNav = () => {

    const dispatch = useDispatch();
    const cartPId = useSelector( state => state.reloadCart);

    const [ totalAmount, setTotalAmount ] = useState(0);
    const [ qtyCounter, setQtyCounter ] = useState(0);
    const [ cartList, setCartList ] = useState([]);
    const [ pIds, setPids ] = useState([]);

    const udpatedCartQty = async () => {
        axios
        .post(config.api_url+'orders/list' )
        .then( response => {

            let order_list = response.data

            order_list = toNormalArrayObject(order_list);

            let total_quantity = 0;
            let total_amount = 0;
            order_list.forEach(value =>{
                total_quantity = parseInt(total_quantity) + parseInt(value.quantity);
                total_amount = parseInt(total_quantity) * parseFloat(value.price);
            });

            setTotalAmount(total_amount);
            setQtyCounter(total_quantity);
            setCartList(order_list);
        })
        .catch(err => {
            
        });
    };

    const deleteItem = ( e, pid ) => {

        axios
        .post(config.api_url+'orders/deleteById', { pids: pid } )
        .then( response => {

            let result = response.data
            if ( result.status===1 ){
                //jQuery(e.currentTarget).parent('.ps-cart-item').remove();
                udpatedCartQty();
            }

        })
        .catch(err => {
            
        });
        
    }

    const fecthDetail = async (pgroup_id) => {
    
       if ( parseInt(pgroup_id)>0 ){

                axios
                .post(config.api_url+'orders/add_to_cart', { id: pgroup_id } )
                .then( response => {

                    let result = response.data
                    
                    if ( result.status===1 ){
                        udpatedCartQty();
                    }

                })
                .catch(err => {
                    
                });
        }
    };


    useEffect( () => {
        udpatedCartQty();

    }, [] );

    useEffect( () => {

        if ( cartPId !== ''){
            const cartPId_arr = cartPId.toString().split('-');
           

            if ( cartPId_arr.length>1 ){

                const pid = cartPId_arr[0];
                const action = cartPId_arr[3].toString().toLowerCase();
                if ( action=='add'){
                    fecthDetail(cartPId_arr[0]);

                }else if ( action=='list'){
                    udpatedCartQty();
                }
            }
        }
    }, [cartPId] );

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
                <div className="ps-cart"><a className="ps-cart__toggle" href="#"><span><i>{qtyCounter}</i></span><i className="ps-icon-shopping-cart"></i></a>
                    <div className="ps-cart__listing">
                        <div className="ps-cart__content">

                            { 
                                ( qtyCounter===0 ) ?
                                    (
                                        <div>no item in cart!</div>
                                    )
                                    :
                                    ( 
                                        cartList.map( detail => (
                                            <div key={detail.product_id} className="ps-cart-item">
                                                <a className="ps-cart-item__close" href="#" onClick={ (e) => deleteItem(e, detail.product_id ) }></a>
                                                <div className="ps-cart-item__thumbnail"><a href="product-detail.html"></a><img src={`https://picsum.photos/1000/1000?random=${detail.product_id}`} alt="" /></div>
                                                <div className="ps-cart-item__content">
                                                     <a className="ps-cart-item__title" href="product-detail.html">{ detail.name }</a>
                                                     <p><span>Quantity:<i>{ detail.quantity }</i></span><span>Total:<i>£{ number_format( (detail.quantity*detail.price ) ) }</i></span></p>
                                                </div>
                                            </div>   
                                        ))
                                    )
                            }
                        </div>
                        <div className="ps-cart__total">
                            <p>Number of items:<span>{qtyCounter}</span></p>
                            <p>Item Total:<span>£{ number_format(totalAmount) }</span></p>
                        </div>
                        <div className="ps-cart__footer"><Link to={ { pathname : '/cart', state : { from : 'header nav' } }} className="ps-btn" href="cart.html">Check out<i className="ps-icon-arrow-left"></i></Link></div>
                    </div>
                </div>
                
                <div className="menu-toggle"><span></span></div>
            </div>
            </div>
        </nav>
    )
}

export default HeaderNav;