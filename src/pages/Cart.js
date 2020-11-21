import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import DocumentTitle  from 'react-document-title';
import axios from 'axios';

import config from '../helpers/Config';
import { appendScript, toNormalArrayObject, number_format  }  from '../helpers/Utilities';

import { useSelector, useDispatch } from 'react-redux';
import { reloadCart } from '../actions';


const Cart = () => {

   const dispatch = useDispatch();

   const location = useLocation(); // instead of props
   console.log(location);

   const [ totalAmount, setTotalAmount ] = useState(0);
   const [ cartList, setCartList ] = useState([]);

   
   const orderList = async () => {
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
          setCartList(order_list);
      })
      .catch(err => {
          
      });
  };


   const throwToCart = async (pgroup_id) => {
      const ts = Math.round((new Date()).getTime() / 1000)+'-'+Math.random()+'-list';
      dispatch( reloadCart(pgroup_id+'-'+ts) );
   }

   
   const addItem = ( e, pid ) => {
      axios
      .post(config.api_url+'orders/add_to_cart', { id: pid } )
      .then( response => {

         let result = response.data
         
         if ( result.status===1 ){
            orderList();
            throwToCart(pid);
         }

      })
      .catch(err => {
         
      });
   }


   const minusItem = ( e, pid ) => {
      axios
      .post(config.api_url+'orders/add_to_cart', { id: pid, action : 'minus' } )
      .then( response => {

         let result = response.data
         
         if ( result.status===1 ){
            orderList();
            throwToCart(pid);
         }

      })
      .catch(err => {
         
      });
   }

  const deleteItem = ( e, pid ) => {
      axios
      .post(config.api_url+'orders/deleteById', { pids: pid } )
      .then( response => {
         let result = response.data
         if ( result.status===1 ){
            orderList();
            throwToCart(pid);
         }
      })
      .catch(err => {
         
      });
   }

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

                  { 
                     cartList.map( detail => (
                     <tr key={detail.product_id} >
                        <td>
                              <a className="ps-product__preview" href="product-detail.html">
                              <img className="mr-15" src={`https://picsum.photos/1000/1000?random=${detail.product_id}`}  alt="" width="100" height="100" />{ detail.name }</a>
                        </td>
                        <td>${ number_format(detail.price) }</td>
                        <td>
                           <div className="form-group--number">
                              <button className="minus" onClick={ (e) => minusItem(e, detail.product_id ) }><span>-</span></button>
                              <input className="form-control" type="text" value={ detail.quantity } readOnly />
                              <button className="plus" onClick={ (e) => addItem(e, detail.product_id ) }><span>+</span></button>
                           </div>
                        </td>
                        <td>${ number_format( (detail.quantity*detail.price ) ) }</td>
                        <td>
                           <div className="ps-remove" onClick={ (e) => deleteItem(e, detail.product_id ) }></div>
                        </td>
                     </tr>
                     ))
                  }
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
                        <Link to="/product-listing" className="ps-btn ps-btn--gray">Continue Shopping</Link>
                     </div>
                  </div>
                  <div className="ps-cart__total">
                     <h3>Total Price: <span> { number_format(totalAmount) } $</span></h3><Link to="/checkout" className="ps-btn">Process to checkout<i className="ps-icon-next"></i></Link>
                  </div>
                  </div>
               </div>
            </div>
         </div>
       </DocumentTitle>
    )
}

export default Cart;
