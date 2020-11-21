import React, { useEffect, useState } from 'react';
import jQuery from 'jquery';
//import { Redirect } from 'react-router';
import { createBrowserHistory } from 'history';
import { Link, Redirect, useHistory  } from 'react-router-dom';
import DocumentTitle  from 'react-document-title';
import axios from 'axios';

import { useSelector, useDispatch } from 'react-redux';
import { reloadCart } from '../actions';

import config from '../helpers/Config';
import { appendScript, toNormalArrayObject, fieldSorter }  from '../helpers/Utilities';

const ProductListing = ({match}) => {

   const dispatch = useDispatch();
   const cartItems = useSelector( state => state.reloadCart);
   //dispatch( updatePageTitle('Users') );

   const history = useHistory();
   const historyBrowser = createBrowserHistory();

   historyBrowser.listen(() => {
      //console.log("ooh, a navigation!");
   });
   
   
   const [currentPage, setCurrentPage] = useState(1);
   const [listSortBy, setListSortBy] = useState(0);
   const [filterValues, setFilterValues] = useState({});
   const [ productList, setProductList] = useState({});
   const [ categoryList, setCategoryList] = useState({});
   
   const goProductDetail = () =>{
     history.push('/product-detail/1');
   }

   const pushListSortby = (e) => {
      const optionNum = e.target.value;
      setListSortBy(optionNum);
      
      if (optionNum>0){
         let lists = toNormalArrayObject(productList);
         if ( optionNum == 1 ){
            lists = lists.sort(fieldSorter(['name']));
         }else if ( optionNum == 2){
            lists = lists.sort(fieldSorter(['name']));
            lists.reverse();
         }else if ( optionNum == 3){
            lists = lists.sort(fieldSorter(['price']));
         }else if ( optionNum == 4){
            lists = lists.sort(fieldSorter(['price']));
            lists.reverse();
         }

         setProductList(lists); 
      }
   }

   const generateUrl = () => {
      let parameters = {};
      let categoryIds = [];

      jQuery('ul[data-name].ps-list--checked > li.current').each(function (){
         
         const name = jQuery(this).parent('ul').attr('data-name');
         const id = jQuery(this).attr('data-id');
         
        if ( name  in parameters){
            parameters[name] = parameters[name].concat(','+id);
            if ( name ==='category' ){
               categoryIds.push(id);
            }
        }else{
            parameters[name] = id;
            if ( name ==='category' ){
               categoryIds.push(id);
            }
        } 

      });

      // remove duplicates
      categoryIds = categoryIds.filter(function(item, pos, self) {
         return self.indexOf(item) == pos;
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

      if (categoryIds.length>0){
         fecthProductList( categoryIds.join(',') );
      }else{
         fecthProductList();
      }
   }

   const fecthProductList = async ( category_ids = '', page = 1 ) => {

      let filterValuesArr = { page : page, limit : 10 };
      if ( category_ids !== '' ){
         filterValuesArr = { ...filterValuesArr, ...{ category_ids : category_ids } };
      }

      axios
      .post(config.api_url+'products/list', filterValuesArr )
      .then( response => {
         let lists = response.data;

         lists = toNormalArrayObject(lists);
         lists = lists.sort(fieldSorter(['name']));

         setProductList(lists);
      })
      .catch(err => {
         
      });
      
   }

   const fecthCategoryList = async ( filterParams ) => {

      const data = await fetch( config.api_url+'categories/list' );
      let lists = await data.json();
      
      for (const [key, value] of Object.entries(lists)) {
         const id = value.group_id;

         let classCurrent = '';
         if ( 'category' in filterParams ){
            if ( filterParams['category'].indexOf(id.toString())>=0 ){
               classCurrent = 'current';
            }
         }

         lists[key] = { ...value, ...{ class : classCurrent } };
      }

      lists = toNormalArrayObject(lists);
      lists = lists.sort(fieldSorter(['name']));

      setCategoryList(lists);
   }


   const addToCart = async (pgroup_id) => {
      const ts = Math.round((new Date()).getTime() / 1000)+'-'+Math.random()+'-add';
      dispatch( reloadCart(pgroup_id+'-'+ts) );
   }

   const checkBoxSelection = (e, id) => {
      jQuery(e.currentTarget).toggleClass('current');
      generateUrl();
   }

   const paginatePage = (e, pageNum = 1 ) => {

      if ( currentPage !== pageNum ){

         let categories_ids = '';
         if ( 'category' in filterValues ){
            categories_ids = filterValues['category'].join(',').toString();
         }

         fecthProductList(categories_ids, pageNum );
         setCurrentPage( pageNum );
         
      }

      jQuery(e.currentTarget).parent('li').siblings().removeClass('active');
      jQuery(e.currentTarget).parent('li').addClass('active');
      
   }
   

   const pushUrlFilters = () => {
      const filter_values = match.params.any;
      let filter_values_bycategory = {};

      if ( filter_values !== undefined ){

         let filter_bygroup = filter_values.split(':');

         let array_values_bygroup = {};
         filter_bygroup.forEach( function( value, key ){

            if ( !(value in array_values_bygroup)){
               const name_values = value.split('-');
               const name_attr = name_values[1].split(',');

               name_attr.forEach( function (val_id){
                  filter_values_bycategory[name_values[0]] = name_attr;
               });
            }
         });

      }

      return filter_values_bycategory;
   }

   useEffect ( () => {
      const filter_values_bycategory = pushUrlFilters();
      //const filter_counter = Object.keys(filter_values_bycategory).length;
      setFilterValues(filter_values_bycategory);

      let categories_ids = '';
      if ( 'category' in filter_values_bycategory ){
         categories_ids = filter_values_bycategory['category'].join(',').toString();
      }

      fecthCategoryList( filter_values_bycategory );
      fecthProductList(categories_ids);
      
      jQuery('.zoomContainer').remove();
      appendScript(`${config.assets_url}js/main.js`);

    },[]);  

   
    return (
       <DocumentTitle title="Product Listing">
            <div className="ps-products-wrap pt-80 pb-80">
               <div className="ps-products" data-mh="product-listing">

                  <div className="ps-product-action">

                     <div className="ps-product__filter">
                        <select className="ps-select selectpicker" value={ listSortBy } onChange={ pushListSortby } >
                           <option value="0">Shortby</option>
                           <option value="1">Name (Ascending) </option>
                           <option value="2">Name (Descending) </option>
                           <option value="3">Price (Low to High)</option>
                           <option value="4">Price (High to Low)</option>
                        </select>
                     </div>

                     <div className="ps-pagination">
                        <ul className="pagination">
                           <li><a href="#"><i className="fa fa-angle-left"></i></a></li>
                           <li className="active"><a href="#" onClick={ (e) => paginatePage(e, 1) } >1</a></li>
                           <li><a href="#" onClick={ (e) => paginatePage(e, 2) } >2</a></li>
                           <li><a href="#">3</a></li>
                           <li><a href="#">...</a></li>
                           <li><a href="#"><i className="fa fa-angle-right"></i></a></li>
                        </ul>
                     </div>
                  </div>

                  <div className="ps-product__columns">
                     {  Object.entries(productList).map( ([key, list] ) => (
                     <div key={list.group_id} className="ps-product__column">
                        <div className="ps-shoe mb-30">
                           <div className="ps-shoe__thumbnail">
                              <a className="ps-shoe__favorite" href="#" onClick={ () => addToCart(list.group_id) }><i className="ps-icon-heart"></i></a>
                              <img src={`https://picsum.photos/1000/1000?random=${list.group_id}`} alt="" />
                              <Link to={`/product-detail/${list.group_id}`} className="ps-shoe__overlay"></Link>
                           </div>
                           <div className="ps-shoe__content">
                              <div className="ps-shoe__variants">
                              <div className="ps-shoe__variant normal">
                                 <img src={`https://picsum.photos/1000/1000?random=1`} alt="" />
                                 <img src={`https://picsum.photos/1000/1000?random=2`} alt="" />
                                 <img src={`https://picsum.photos/1000/1000?random=3`} alt="" />
                                 <img src={`https://picsum.photos/1000/1000?random=4`} alt="" />
                              </div>
                              <select className="ps-rating ps-shoe__rating">
                                 <option value="1">1</option>
                                 <option value="1">2</option>
                                 <option value="1">3</option>
                                 <option value="1">4</option>
                                 <option value="2">5</option>
                              </select>
                              </div>
                              <div className="ps-shoe__detail"><a className="ps-shoe__name" href="#">{list.name}</a>
                              <p className="ps-shoe__categories"><a href="#">Men shoes</a>,<a href="#"> Nike</a>,<a href="#"> Jordan</a></p><span className="ps-shoe__price"> £ {list.price}</span>
                              </div>
                           </div>
                        </div>
                     </div>
                     )) }
                  </div>

               </div>


               <div className="ps-sidebar" data-mh="product-listing">
                  <aside className="ps-widget--sidebar ps-widget--category">
                     <div className="ps-widget__header">
                        <h3 onClick={ () => goProductDetail() }>Category</h3>
                     </div>
                     <div className="ps-widget__content">
                     <ul className="ps-list--checked" data-name="category">
                        {  Object.entries(categoryList).map( ([key, list] ) => (
                           <li key={list.group_id} className={list.class} data-id={list.group_id} onClick={ (e) => checkBoxSelection(e, list.group_id) }><a href="#">{list.name} (521)</a></li>
                        )) }
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
