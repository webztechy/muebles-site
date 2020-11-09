import React, { Fragment, useEffect } from 'react';
//import jQuery from 'jquery';
//import ScriptTag from 'react-script-tag';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

//import config from './helpers/Config';
//import { appendScript }  from './helpers/Utilities';

import Header from './layout/Header';
import Home from './pages/Home';
import ProductDetail from './pages/ProductDetail';
import NewsLetter from './sections/NewsLetter';
import Footer from './layout/Footer';

import ProductListing from './pages/ProductListing';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';


//import './assets/js/main.js';

function App() {

 useEffect ( () => {

    //const mainjs = `${config.assets_url}js/main.js`;

    //removeScript(mainjs);
    //appendScript(mainjs);

    // <ScriptTag isHydrating={false} type="text/javascript" src={`${config.assets_url}js/main.js`} />

 });  
 

  return (
    <Router>
        <Header />
        <main className="ps-main">
          <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/home" exact component={Home} />
              <Route path="/product-detail" exact component={ProductDetail} />
              <Route path="/product-detail/:id" exact component={ProductDetail} />
              <Route path="/product-listing/:any" exact component={ProductListing} />
              <Route path="/product-listing" exact component={ProductListing} />
              <Route path="/cart" exact component={Cart} />
              <Route path="/Checkout" exact component={Checkout} />
          </Switch>

          <NewsLetter />
          <Footer />
        </main>
    </Router>
  );
}

export default App;
