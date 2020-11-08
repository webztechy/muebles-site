import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import config from '../helpers/Config';

import ItemTopSaleTemplate from './ItemTopSaleTemplate';

const TopSales = ( props ) => {

    const [ tMask, setMask ] = useState('BEST SALES');
    const [ tTitle, setTitle ] = useState('Top Sales');

    useEffect( () =>{
        let pMask = ( props.mask !== undefined ) ? props.mask : tMask  ;
        setMask(pMask);

        let pTitle = ( props.title !== undefined ) ? props.title : tTitle ;
        setTitle(pTitle); 
    });

    return (
        <div className="ps-section ps-section--top-sales ps-owl-root pt-80 pb-80">
            <div className="ps-container">
                <div className="ps-section__header mb-50">
                    <div className="row">
                        <div className="col-lg-9 col-md-9 col-sm-12 col-xs-12 ">
                            <h3 className="ps-section__title" data-mask={ tMask }>- { tTitle }</h3>
                        </div>
                        <div className="col-lg-3 col-md-3 col-sm-12 col-xs-12 ">
                            <div className="ps-owl-actions"><a className="ps-prev" href="#"><i className="ps-icon-arrow-right"></i>Prev</a><a className="ps-next" href="#">Next<i className="ps-icon-arrow-left"></i></a></div>
                        </div>
                    </div>
                </div>
                <div className="ps-section__content">

                    <div className="ps-owl--colection owl-slider" data-owl-auto="true" data-owl-loop="true" data-owl-speed="5000" data-owl-gap="30" data-owl-nav="false" data-owl-dots="false" data-owl-item="4" data-owl-item-xs="1" data-owl-item-sm="2" data-owl-item-md="3" data-owl-item-lg="4" data-owl-duration="1000" data-owl-mousedrag="on">
                        
                        <div className="ps-shoes--carousel">
                            <div className="ps-shoe">
                                <div className="ps-shoe__thumbnail">
                                    <div className="ps-badge"><span>New</span></div><a className="ps-shoe__favorite" href="#"><i className="ps-icon-heart"></i></a><img src={`${config.assets_url}images/shoe/1.jpg`} alt="" /><Link to="/product-detail/1" className="ps-shoe__overlay"></Link>
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
                                    <div className="ps-shoe__detail"><a className="ps-shoe__name" href="product-detai.html">Air Jordan 7 Retro</a>
                                        <p className="ps-shoe__categories"><a href="#">Men shoes</a>,<a href="#"> Nike</a>,<a href="#"> Jordan</a></p><span className="ps-shoe__price"> £ 120</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="ps-shoes--carousel">
                            <div className="ps-shoe">
                                <div className="ps-shoe__thumbnail">
                                    <div className="ps-badge"><span>New</span></div>
                                    <div className="ps-badge ps-badge--sale ps-badge--2nd"><span>-35%</span></div>
                                    <a className="ps-shoe__favorite" href="#"><i className="ps-icon-heart"></i></a><img src={`${config.assets_url}images/shoe/1.jpg`} alt="" /><Link to="/product-detail/2" className="ps-shoe__overlay"></Link>
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
                                    <div className="ps-shoe__detail"><a className="ps-shoe__name" href="product-detai.html">Air Jordan 7 Retro</a>
                                        <p className="ps-shoe__categories"><a href="#">Men shoes</a>,<a href="#"> Nike</a>,<a href="#"> Jordan</a></p><span className="ps-shoe__price"> £ 120</span>
                                    </div>
                                </div>
                            </div>
                        </div>


                        <ItemTopSaleTemplate />
                        <ItemTopSaleTemplate />
                        <ItemTopSaleTemplate />
                        <ItemTopSaleTemplate />
                        <ItemTopSaleTemplate />

                    </div>

                </div>
            </div>
        </div>
    )
}

export default TopSales;
