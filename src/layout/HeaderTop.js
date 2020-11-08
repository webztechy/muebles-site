import React from 'react';
import config from './../helpers/Config';

const TopHeader = () => {
    return (
        <div className="header__top">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-6 col-md-8 col-sm-6 col-xs-12 ">
                        <p>460 West 34th Street, 15th floor, New York  -  Hotline: 804-377-3580 - 804-399-3580</p>
                    </div>
                    <div className="col-lg-6 col-md-4 col-sm-6 col-xs-12 ">
                        <div className="header__actions">
                            <a href="#">Login & Regiser</a>
                            <div className="btn-group ps-dropdown">
                                <a className="dropdown-toggle" href="#" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">USD<i className="fa fa-angle-down"></i></a>
                                <ul className="dropdown-menu">
                                    <li><a href="#"><img src={`${config.assets_url}images/flag/usa.svg`} alt="" /> USD</a></li>
                                    <li><a href="#"><img src={`${config.assets_url}images/flag/singapore.svg`} alt="" /> SGD</a></li>
                                    <li><a href="#"><img src={`${config.assets_url}images/flag/japan.svg`} alt="" /> JPN</a></li>
                                </ul>
                            </div>
                            <div className="btn-group ps-dropdown"><a className="dropdown-toggle" href="#" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Language<i className="fa fa-angle-down"></i></a>
                                <ul className="dropdown-menu">
                                    <li><a href="#">English</a></li>
                                    <li><a href="#">Japanese</a></li>
                                    <li><a href="#">Chinese</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TopHeader;