import React from 'react';
import config from '../helpers/Config';

const SpecialBanner = () => {
    return (
        <div className="ps-section--offer">
            <div className="ps-column"><a className="ps-offer" href="product-listing.html"><img src={`${config.assets_url}images/banner/home-banner-1.png`} alt="" /></a></div>
            <div className="ps-column"><a className="ps-offer" href="product-listing.html"><img src={`${config.assets_url}images/banner/home-banner-2.png`} alt="" /></a></div>
      </div>
    )
}

export default SpecialBanner;
