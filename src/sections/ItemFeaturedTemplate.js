import React from 'react';
import { Link } from 'react-router-dom';
import config from '../helpers/Config';

const ItemFeaturedTemplate = (props) => {
    return (
        <div className={`grid-item ${props.categorySlug}`} >
            <div className="grid-item__content-wrapper">
                <div className="ps-shoe mb-30">
                    <div className="ps-shoe__thumbnail">
                    <a className="ps-shoe__favorite" href="#"><i className="ps-icon-heart"></i></a><img src={`${config.assets_url}images/shoe/1.jpg`} alt="" /><Link to="/product-detail/1" className="ps-shoe__overlay" ></Link>
                </div>
                <div className="ps-shoe__content">
                    <div className="ps-shoe__variants">
                    <div className="ps-shoe__variant normal"><img src={`${config.assets_url}images/shoe/2.jpg`} alt="" /><img src={`${config.assets_url}images/shoe/3.jpg`} alt=""  /><img src={`${config.assets_url}images/shoe/4.jpg`} alt="" /><img src={`${config.assets_url}images/shoe/5.jpg`} alt="" /></div>
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
        </div>
    )
}

export default ItemFeaturedTemplate;
