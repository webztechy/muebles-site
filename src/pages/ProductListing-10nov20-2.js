import React, { useEffect, useState } from 'react';
import jQuery from 'jquery';
//import { Redirect } from 'react-router';
import { createBrowserHistory } from 'history';
import { Link, Redirect, useHistory  } from 'react-router-dom';
import DocumentTitle  from 'react-document-title';

import config from '../helpers/Config';
import { appendScript }  from '../helpers/Utilities';

const ProductListing = ({match}) => {

   const history = useHistory();
   const historyBrowser = createBrowserHistory();

   //const [filterValues, setFilterValues] = useState({});

   historyBrowser.listen(() => {
      //console.log("ooh, a navigation!");
   });

   const goProductDetail = () =>{
     history.push('/product-detail/1');
   }

   const generateUrl = () => {
      let parameters = {};

      jQuery('ul[data-name].ps-list--checked > li.current').each(function (){
         
         const name = jQuery(this).parent('ul').attr('data-name');
         const id = jQuery(this).attr('data-id');
         
        if ( name  in parameters){
            parameters[name] = parameters[name].concat(','+id);
        }else{
            parameters[name] = id;
        } 

      });


      jQuery('.table.ps-table--size td.active').each(function (){

         const name = jQuery(this).closest('.table').attr('data-name');
         const id = jQuery(this).attr('data-id');

         if ( name  in parameters){
               parameters[name] = parameters[name].concat(','+id);
         }else{
               parameters[name] = id;
         } 
         
      });


      let parameter_url = new Array();
      for (const [ky, value] of Object.entries(parameters)) {
         parameter_url.push(`${ky}-${value}`);
      }

      parameter_url = parameter_url.join(':');
      historyBrowser.push(`/product-listing/${parameter_url}`);
   }


   useEffect ( () => {

      const filter_values = match.params.any;
      if ( filter_values !== undefined ){

         let filter_bygroup = filter_values.split(':');

         /* let array_values_bygroup = {};
         filter_bygroup.forEach( function( value, key ){
            if ( !(value in array_values_bygroup)){
               const name_values = value.split('-');
               array_values_bygroup[name_values[0]] = name_values[1].split(',');
            }
         }); */


         let array_values_bygroup = {};
         filter_bygroup.forEach( function( value, key ){
            if ( !(value in array_values_bygroup)){
               const name_values = value.split('-');
               const name_attr = name_values[1].split(',');

               name_attr.forEach( function (val_id){
                  console.log(`[data-name='${name_values[0]}'] [data-id='${val_id}']`);
                  jQuery(`[data-name='${name_values[0]}'] [data-id='${val_id}']`).addClass('current').addClass('active');
               });
            }
         });

         //setFilterValues(array_values_bygroup);
      }

      jQuery('.zoomContainer').remove();

      appendScript(`${config.assets_url}js/main.js`);

       jQuery('.table.ps-table--size td').click(function (){
            jQuery(this).toggleClass('active');
            generateUrl();
       });

       jQuery('ul[data-name].ps-list--checked > li').click(function (){
            jQuery(this).toggleClass('current');
            generateUrl();
       });

    },[]);  

   
    return (
       <DocumentTitle title="Product Listing">
            <div className="ps-products-wrap pt-80 pb-80">
               <div className="ps-products" data-mh="product-listing">
                  <div className="ps-product-action">
                     <div className="ps-product__filter">
                     <select className="ps-select selectpicker">
                        <option value="1">Shortby</option>
                        <option value="2">Name</option>
                        <option value="3">Price (Low to High)</option>
                        <option value="3">Price (High to Low)</option>
                     </select>
                     </div>
                     <div className="ps-pagination">
                     <ul className="pagination">
                        <li><a href="#"><i className="fa fa-angle-left"></i></a></li>
                        <li className="active"><a href="#">1</a></li>
                        <li><a href="#">2</a></li>
                        <li><a href="#">3</a></li>
                        <li><a href="#">...</a></li>
                        <li><a href="#"><i className="fa fa-angle-right"></i></a></li>
                     </ul>
                     </div>
                  </div>

                  <div className="ps-product__columns">
                     <div className="ps-product__column">
                     <div className="ps-shoe mb-30">
                        <div className="ps-shoe__thumbnail">
                           <div className="ps-badge"><span>New</span></div>
                           <div className="ps-badge ps-badge--sale ps-badge--2nd"><span>-35%</span></div><a className="ps-shoe__favorite" href="#"><i className="ps-icon-heart"></i></a><img src={`${config.assets_url}images/shoe/1.jpg`} alt="" /><Link to="/product-detail/1" className="ps-shoe__overlay"></Link>
                        </div>
                        <div className="ps-shoe__content">
                           <div className="ps-shoe__variants">
                           <div className="ps-shoe__variant normal"><img src={`${config.assets_url}images/shoe/2.jpg`} alt="" /><img src={`${config.assets_url}images/shoe/3.jpg`} alt="" /><img src={`${config.assets_url}images/shoe/4.jpg`} alt="" /><img src={`${config.assets_url}images/shoe/5.jpg`} alt="" /></div>
                           <select className="ps-rating ps-shoe__rating">
                              <option value="1">1</option>
                              <option value="1">2</option>
                              <option value="1">3</option>
                              <option value="1">4</option>
                              <option value="2">5</option>
                           </select>
                           </div>
                           <div className="ps-shoe__detail"><a className="ps-shoe__name" href="#">Air Jordan 7 Retro</a>
                           <p className="ps-shoe__categories"><a href="#">Men shoes</a>,<a href="#"> Nike</a>,<a href="#"> Jordan</a></p><span className="ps-shoe__price">
                              <del>£220</del> £ 120</span>
                           </div>
                        </div>
                     </div>
                     </div>
                     <div className="ps-product__column">
                     <div className="ps-shoe mb-30">
                        <div className="ps-shoe__thumbnail"><a className="ps-shoe__favorite" href="#"><i className="ps-icon-heart"></i></a><img src={`${config.assets_url}images/shoe/2.jpg`} alt="" /><Link to="/product-detail/1" className="ps-shoe__overlay"></Link>
                        </div>
                        <div className="ps-shoe__content">
                           <div className="ps-shoe__variants">
                           <div className="ps-shoe__variant normal"><img src={`${config.assets_url}images/shoe/2.jpg`} alt="" /><img src={`${config.assets_url}images/shoe/3.jpg`} alt="" /><img src={`${config.assets_url}images/shoe/4.jpg`} alt="" /><img src={`${config.assets_url}images/shoe/5.jpg`} alt="" /></div>
                           <select className="ps-rating ps-shoe__rating">
                              <option value="1">1</option>
                              <option value="1">2</option>
                              <option value="1">3</option>
                              <option value="1">4</option>
                              <option value="2">5</option>
                           </select>
                           </div>
                           <div className="ps-shoe__detail"><a className="ps-shoe__name" href="#">Air Jordan 7 Retro</a>
                           <p className="ps-shoe__categories"><a href="#">Men shoes</a>,<a href="#"> Nike</a>,<a href="#"> Jordan</a></p><span className="ps-shoe__price"> £ 120</span>
                           </div>
                        </div>
                     </div>
                     </div>
                  </div>

               </div>
               <div className="ps-sidebar" data-mh="product-listing">
                  <aside className="ps-widget--sidebar ps-widget--category">
                     <div className="ps-widget__header">
                     <h3 onClick={ () => goProductDetail() }>Category</h3>
                     </div>
                     <div className="ps-widget__content">
                     <ul className="ps-list--checked" data-name="category">
                        <li className="current" data-id="1"><a href="#">Life(521)</a></li>
                        <li data-id="2"><a href="#">Running(76)</a></li>
                        <li data-id="3"><a href="#">Baseball(21)</a></li>
                        <li data-id="4"><a href="#">Football(105)</a></li>
                        <li data-id="5"><a href="#">Soccer(108)</a></li>
                        <li data-id="6"><a href="#">Trainning & game(47)</a></li>
                        <li data-id="3"><a href="#">More</a></li>
                     </ul>
                     </div>
                  </aside>
                  <aside className="ps-widget--sidebar ps-widget--filter">
                     <div className="ps-widget__header">
                     <h3>Price</h3>
                     </div>
                     <div className="ps-widget__content">
                     <div className="ac-slider" data-default-min="300" data-default-max="2000" data-max="3450" data-step="50" data-unit="$"></div>
                     <p className="ac-slider__meta">Price:<span className="ac-slider__value ac-slider__min"></span>-<span className="ac-slider__value ac-slider__max"></span></p><a className="ac-slider__filter ps-btn" href="#">Filter</a>
                     </div>
                  </aside>
                  <aside className="ps-widget--sidebar ps-widget--category">
                     <div className="ps-widget__header">
                     <h3>Sky Brand</h3>
                     </div>
                     <div className="ps-widget__content">
                     <ul className="ps-list--checked" data-name="brand">
                        <li className="current"  data-id="1"><a href="#">Nike(521)</a></li>
                        <li data-id="2"><a href="#">Adidas(76)</a></li>
                        <li data-id="3"><a href="#">Baseball(69)</a></li>
                        <li data-id="4"><a href="#">Gucci(36)</a></li>
                        <li data-id="5"><a href="#">Dior(108)</a></li>
                        <li data-id="6"><a href="#">B&G(108)</a></li>
                        <li data-id="17"><a href="#">Louis Vuiton(47)</a></li>
                     </ul>
                     </div>
                  </aside>
                  <div className="ps-sticky desktop">
                     <aside className="ps-widget--sidebar">
                     <div className="ps-widget__header">
                        <h3>Size</h3>
                     </div>
                     <div className="ps-widget__content">
                        <table className="table ps-table--size" data-name="size">
                           <tbody>
                           <tr>
                              <td className="active" data-id="3">3</td>
                              <td data-id="5.5">5.5</td>
                              <td data-id="8">8</td>
                              <td data-id="10.5">10.5</td>
                              <td data-id="13">13</td>
                           </tr>
                           <tr>
                              <td data-id="3.5">3.5</td>
                              <td data-id="6">6</td>
                              <td data-id="8.5">8.5</td>
                              <td data-id="11">11</td>
                              <td data-id="13.5">13.5</td>
                           </tr>
                           <tr>
                              <td data-id="4">4</td>
                              <td data-id="6.5">6.5</td>
                              <td data-id="9">9</td>
                              <td data-id="11.5">11.5</td>
                              <td data-id="14">14</td>
                           </tr>
                           <tr>
                              <td data-id="4.5">4.5</td>
                              <td data-id="7">7</td>
                              <td data-id="9.5">9.5</td>
                              <td data-id="12">12</td>
                              <td data-id="14.5">14.5</td>
                           </tr>
                           <tr>
                              <td data-id="5">5</td>
                              <td data-id="7.5">7.5</td>
                              <td data-id="10">10</td>
                              <td data-id="12.5">12.5</td>
                              <td data-id="15">15</td>
                           </tr>
                           </tbody>
                        </table>
                     </div>
                     </aside>
                     <aside className="ps-widget--sidebar">
                     <div className="ps-widget__header">
                        <h3>Color</h3>
                     </div>
                     <div className="ps-widget__content">
                        <ul className="ps-list--color">
                           <li><a href="#"></a></li>
                           <li><a href="#"></a></li>
                           <li><a href="#"></a></li>
                           <li><a href="#"></a></li>
                           <li><a href="#"></a></li>
                           <li><a href="#"></a></li>
                           <li><a href="#"></a></li>
                           <li><a href="#"></a></li>
                           <li><a href="#"></a></li>
                           <li><a href="#"></a></li>
                           <li><a href="#"></a></li>
                           <li><a href="#"></a></li>
                           <li><a href="#"></a></li>
                        </ul>
                     </div>
                     </aside>
                  </div>
               </div>

            </div> 
       </DocumentTitle>
    )
}

export default ProductListing;
