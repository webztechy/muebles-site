import React, { Fragment, useEffect } from 'react';
import DocumentTitle  from 'react-document-title';

import Slider from './../sections/Slider';
import FeaturedProducts from './../sections/FeaturedProducts';
import SpecialBanner from './../sections/SpecialBanner';
import TopSales from './../sections/TopSales';
import Testimonial from './../sections/Testimonial';
import OurStory from './../sections/OurStory';

import config from './../helpers/Config';
import { appendScript }  from './../helpers/Utilities';

const Home = () => {

   useEffect ( () => {
       appendScript(`${config.assets_url}js/main.js`);
    },[]);  
    
    return (
       <DocumentTitle title={`Home - ${config.site_title}`}>
          <Fragment>
            <Slider />
            <FeaturedProducts />
            <SpecialBanner />
            <TopSales />
            <Testimonial />
            <OurStory />
         </Fragment>
       </DocumentTitle>
    )
}

export default Home;
