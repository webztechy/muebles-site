import React, { Fragment } from 'react';

import HeaderTop from './HeaderTop';
import HeaderNav from './HeaderNav';
import HeaderServices from './HeaderServices';

const Header = () => {
    return (
        <Fragment>
            <div className="header--sidebar"></div>
            <header className="header">
                <HeaderTop />
                <HeaderNav />
            </header>
            <HeaderServices />
        </Fragment>
    )
}

export default Header;