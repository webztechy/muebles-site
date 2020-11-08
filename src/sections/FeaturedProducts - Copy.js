import React from 'react';
import config from './../helpers/Config';

const FeaturedProducts = () => {
    return (
        <div className="ps-section--features-product ps-section masonry-root pt-100 pb-100">
            <div className="ps-container">
                <div className="ps-section__header mb-50">
                    <h3 className="ps-section__title" data-mask="features">- Features Products</h3>
                    <ul className="ps-masonry__filter">
                    <li className="current"><a href="#" data-filter="*">All <sup>8</sup></a></li>
                    <li><a href="#" data-filter=".nike">Nike <sup>1</sup></a></li>
                    <li><a href="#" data-filter=".adidas">Adidas <sup>1</sup></a></li>
                    <li><a href="#" data-filter=".men">Men <sup>1</sup></a></li>
                    <li><a href="#" data-filter=".women">Women <sup>1</sup></a></li>
                    <li><a href="#" data-filter=".kids">Kids <sup>4</sup></a></li>
                    </ul>
                </div>
                <div className="ps-section__content pb-50">
                    <div className="masonry-wrapper" data-col-md="4" data-col-sm="2" data-col-xs="1" data-gap="30" data-radio="100%">
                        <div className="ps-masonry">
                            <div className="grid-sizer"></div>
                            
                            <div className="grid-item kids">
                                <div className="grid-item__content-wrapper">
                                    <div className="ps-shoe mb-30">
                                    <div className="ps-shoe__thumbnail">
                                        <div className="ps-badge"><span>New</span></div>
                                        <div className="ps-badge ps-badge--sale ps-badge--2nd"><span>-35%</span></div><a className="ps-shoe__favorite" href="#"><i className="ps-icon-heart"></i></a><img src={`${config.assets_url}images/shoe/1.jpg`} alt="" /><a className="ps-shoe__overlay" href="product-detail.html"></a>
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

                            <div className="grid-item nike">
                                <div className="grid-item__content-wrapper">
                                    <div className="ps-shoe mb-30">
                                    <div className="ps-shoe__thumbnail"><a className="ps-shoe__favorite" href="#"><i className="ps-icon-heart"></i></a><img src="images/shoe/2.jpg" alt="" /><a className="ps-shoe__overlay" href="product-detail.html"></a>
                                    </div>
                                    <div className="ps-shoe__content">
                                        <div className="ps-shoe__variants">
                                        <div className="ps-shoe__variant normal"><img src="images/shoe/2.jpg" alt="" /><img src="images/shoe/3.jpg" alt="" /><img src="images/shoe/4.jpg" alt="" /><img src="images/shoe/5.jpg" alt="" /></div>
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
                            <div className="grid-item adidas">
                                <div className="grid-item__content-wrapper">
                                    <div className="ps-shoe mb-30">
                                    <div className="ps-shoe__thumbnail"><a className="ps-shoe__favorite" href="#"><i className="ps-icon-heart"></i></a><img src="images/shoe/3.jpg" alt="" /><a className="ps-shoe__overlay" href="product-detail.html"></a>
                                    </div>
                                    <div className="ps-shoe__content">
                                        <div className="ps-shoe__variants">
                                        <div className="ps-shoe__variant normal"><img src="images/shoe/2.jpg" alt="" /><img src="images/shoe/3.jpg" alt="" /><img src="images/shoe/4.jpg" alt="" /><img src="images/shoe/5.jpg" alt="" /></div>
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
                            <div className="grid-item kids">
                                <div className="grid-item__content-wrapper">
                                    <div className="ps-shoe mb-30">
                                    <div className="ps-shoe__thumbnail">
                                        <div className="ps-badge ps-badge--sale"><span>-35%</span></div><a className="ps-shoe__favorite" href="#"><i className="ps-icon-heart"></i></a><img src="images/shoe/4.jpg" alt="" /><a className="ps-shoe__overlay" href="product-detail.html"></a>
                                    </div>
                                    <div className="ps-shoe__content">
                                        <div className="ps-shoe__variants">
                                        <div className="ps-shoe__variant normal"><img src="images/shoe/2.jpg" alt="" /><img src="images/shoe/3.jpg" alt="" /><img src="images/shoe/4.jpg" alt="" /><img src="images/shoe/5.jpg" alt="" /></div>
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
                            <div className="grid-item men">
                                <div className="grid-item__content-wrapper">
                                    <div className="ps-shoe mb-30">
                                    <div className="ps-shoe__thumbnail"><a className="ps-shoe__favorite" href="#"><i className="ps-icon-heart"></i></a><img src="images/shoe/5.jpg" alt="" /><a className="ps-shoe__overlay" href="product-detail.html"></a>
                                    </div>
                                    <div className="ps-shoe__content">
                                        <div className="ps-shoe__variants">
                                        <div className="ps-shoe__variant normal"><img src="images/shoe/2.jpg" alt="" /><img src="images/shoe/3.jpg" alt="" /><img src="images/shoe/4.jpg" alt="" /><img src="images/shoe/5.jpg" alt="" /></div>
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
                            <div className="grid-item women">
                                <div className="grid-item__content-wrapper">
                                    <div className="ps-shoe mb-30">
                                    <div className="ps-shoe__thumbnail"><a className="ps-shoe__favorite" href="#"><i className="ps-icon-heart"></i></a><img src="images/shoe/6.jpg" alt="" /><a className="ps-shoe__overlay" href="product-detail.html"></a>
                                    </div>
                                    <div className="ps-shoe__content">
                                        <div className="ps-shoe__variants">
                                        <div className="ps-shoe__variant normal"><img src="images/shoe/2.jpg" alt="" /><img src="images/shoe/3.jpg" alt="" /><img src="images/shoe/4.jpg" alt="" /><img src="images/shoe/5.jpg" alt="" /></div>
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
                            <div className="grid-item kids">
                                <div className="grid-item__content-wrapper">
                                    <div className="ps-shoe mb-30">
                                    <div className="ps-shoe__thumbnail"><a className="ps-shoe__favorite" href="#"><i className="ps-icon-heart"></i></a><img src="images/shoe/7.jpg" alt="" /><a className="ps-shoe__overlay" href="product-detail.html"></a>
                                    </div>
                                    <div className="ps-shoe__content">
                                        <div className="ps-shoe__variants">
                                        <div className="ps-shoe__variant normal"><img src="images/shoe/2.jpg" alt="" /><img src="images/shoe/3.jpg" alt="" /><img src="images/shoe/4.jpg" alt="" /><img src="images/shoe/5.jpg" alt="" /></div>
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
                            <div className="grid-item kids">
                                <div className="grid-item__content-wrapper">
                                    <div className="ps-shoe mb-30">
                                    <div className="ps-shoe__thumbnail"><a className="ps-shoe__favorite" href="#"><i className="ps-icon-heart"></i></a><img src="images/shoe/8.jpg" alt="" /><a className="ps-shoe__overlay" href="product-detail.html"></a>
                                    </div>
                                    <div className="ps-shoe__content">
                                        <div className="ps-shoe__variants">
                                        <div className="ps-shoe__variant normal"><img src="images/shoe/2.jpg" alt="" /><img src="images/shoe/3.jpg" alt="" /><img src="images/shoe/4.jpg" alt="" /><img src="images/shoe/5.jpg" alt="" /></div>
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
                    </div>
                </div>
            </div>
      </div>
    )
}

export default FeaturedProducts;
