import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import DocumentTitle  from 'react-document-title';
import axios from 'axios';

import config from '../helpers/Config';
import { appendScript, toNormalArrayObject  }  from '../helpers/Utilities';


const Cart = () => {

   const location = useLocation(); // instead of props
   console.log(location);

   const [ cartList, setCartList ] = useState([]);

   
   const orderList = async () => {
      axios
      .post(config.api_url+'orders/list' )
      .then( response => {

          let order_list = response.data

          order_list = toNormalArrayObject(order_list);

         /*  let total_quantity = 0;
          order_list.forEach(value =>{
              total_quantity = parseInt(total_quantity) + parseInt(value.quantity);
          }); */

          setCartList(order_list);
      })
      .catch(err => {
          
      });
  };

   useEffect ( () => {
       appendScript(`${config.assets_url}js/main.js`);
       orderList();
    },[]);  
    
    return (
       <DocumentTitle title="Cart">
         <div className="ps-content pt-80 pb-80">
            <div className="ps-container">
               <div className="ps-cart-listing">
                  <table className="table ps-cart__table">
                  <thead>
                     <tr>
                        <th>All Products</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th>Total</th>
                        <th></th>
                     </tr>
                  </thead>
                  <tbody>
                     <tr>
                        <td><a className="ps-product__preview" href="product-detail.html"><img className="mr-15" src={`${config.assets_url}images/product/cart-preview/1.jpg`} alt="" /> air jordan One mid</a></td>
                        <td>$150</td>
                        <td>
                        <div className="form-group--number">
                           <button className="minus"><span>-</span></button>
                           <input className="form-control" type="text" value="2" />
                           <button className="plus"><span>+</span></button>
                        </div>
                        </td>
                        <td>$300</td>
                        <td>
                        <div className="ps-remove"></div>
                        </td>
                     </tr>
                     <tr>
                        <td><a className="ps-product__preview" href="product-detail.html"><img className="mr-15" src={`${config.assets_url}images/product/cart-preview/2.jpg`} alt="" /> The Crusty Croissant</a></td>
                        <td>$150</td>
                        <td>
                        <div className="form-group--number">
                           <button className="minus"><span>-</span></button>
                           <input className="form-control" type="text" value="2" />
                           <button className="plus"><span>+</span></button>
                        </div>
                        </td>
                        <td>$300</td>
                        <td>
                        <div className="ps-remove"></div>
                        </td>
                     </tr>
                     <tr>
                        <td><a className="ps-product__preview" href="product-detail.html"><img className="mr-15" src={`${config.assets_url}images/product/cart-preview/3.jpg`} alt="" />The Rolling Pin</a></td>
                        <td>$150</td>
                        <td>
                        <div className="form-group--number">
                           <button className="minus"><span>-</span></button>
                           <input className="form-control" type="text" value="2" />
                           <button className="plus"><span>+</span></button>
                        </div>
                        </td>
                        <td>$300</td>
                        <td>
                        <div className="ps-remove"></div>
                        </td>
                     </tr>
                  </tbody>
                  </table>
                  <div className="ps-cart__actions">
                  <div className="ps-cart__promotion">
                     <div className="form-group">
                        <div className="ps-form--icon"><i className="fa fa-angle-right"></i>
                        <input className="form-control" type="text" placeholder="Promo Code" />
                        </div>
                     </div>
                     <div className="form-group">
                        <button className="ps-btn ps-btn--gray">Continue Shopping</button>
                     </div>
                  </div>
                  <div className="ps-cart__total">
                     <h3>Total Price: <span> 2599.00 $</span></h3><Link to="/checkout" className="ps-btn">Process to checkout<i className="ps-icon-next"></i></Link>
                  </div>
                  </div>
               </div>
            </div>
         </div>
       </DocumentTitle>
    )
}

export default Cart;
