import React from 'react';
import config from '../helpers/Config';

const Testimonial = () => {
    return (
        <div className="ps-home-testimonial bg--parallax pb-80" data-background={`${config.assets_url}images/background/parallax.jpg`}>
        <div className="container">
          <div className="owl-slider" data-owl-auto="true" data-owl-loop="true" data-owl-speed="5000" data-owl-gap="0" data-owl-nav="false" data-owl-dots="true" data-owl-item="1" data-owl-item-xs="1" data-owl-item-sm="1" data-owl-item-md="1" data-owl-item-lg="1" data-owl-duration="1000" data-owl-mousedrag="on" data-owl-animate-in="fadeIn" data-owl-animate-out="fadeOut">
            <div className="ps-testimonial">
              <div className="ps-testimonial__thumbnail"><img src={`${config.assets_url}images/testimonial/1.jpg`} alt="" /><i className="fa fa-quote-left"></i></div>
              <header>
                <select className="ps-rating">
                  <option value="1">1</option>
                  <option value="1">2</option>
                  <option value="1">3</option>
                  <option value="1">4</option>
                  <option value="5">5</option>
                </select>
                <p>Logan May - CEO & Founder Invision</p>
              </header>
              <footer>
                <p>“Dessert pudding dessert jelly beans cupcake sweet caramels gingerbread. Fruitcake biscuit cheesecake. Cookie topping sweet muffin pudding tart bear claw sugar plum croissant. “</p>
              </footer>
            </div>
            <div className="ps-testimonial">
              <div className="ps-testimonial__thumbnail"><img src={`${config.assets_url}images/testimonial/2.jpg`} alt="" /><i className="fa fa-quote-left"></i></div>
              <header>
                <select className="ps-rating">
                  <option value="1">1</option>
                  <option value="1">2</option>
                  <option value="1">3</option>
                  <option value="1">4</option>
                  <option value="5">5</option>
                </select>
                <p>Logan May - CEO & Founder Invision</p>
              </header>
              <footer>
                <p>“Dessert pudding dessert jelly beans cupcake sweet caramels gingerbread. Fruitcake biscuit cheesecake. Cookie topping sweet muffin pudding tart bear claw sugar plum croissant. “</p>
              </footer>
            </div>
            <div className="ps-testimonial">
              <div className="ps-testimonial__thumbnail"><img src={`${config.assets_url}images/testimonial/3.jpg`} alt="" /><i className="fa fa-quote-left"></i></div>
              <header>
                <select className="ps-rating">
                  <option value="1">1</option>
                  <option value="1">2</option>
                  <option value="1">3</option>
                  <option value="1">4</option>
                  <option value="5">5</option>
                </select>
                <p>Logan May - CEO & Founder Invision</p>
              </header>
              <footer>
                <p>“Dessert pudding dessert jelly beans cupcake sweet caramels gingerbread. Fruitcake biscuit cheesecake. Cookie topping sweet muffin pudding tart bear claw sugar plum croissant. “</p>
              </footer>
            </div>
          </div>
        </div>
      </div>
    )
}

export default Testimonial;
