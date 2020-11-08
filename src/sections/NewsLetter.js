import React from 'react';

const NewsLetter = () => {
    return (
        <div className="ps-subscribe">
            <div className="ps-container">
            <div className="row">
                    <div className="col-lg-3 col-md-12 col-sm-12 col-xs-12 ">
                        <h3><i className="fa fa-envelope"></i>Sign up to Newsletter</h3>
                    </div>
                    <div className="col-lg-5 col-md-7 col-sm-12 col-xs-12 ">
                        <form className="ps-subscribe__form" action="do_action" method="post">
                            <input className="form-control" type="text" placeholder="" />
                            <button>Sign up now</button>
                        </form>
                    </div>
                    <div className="col-lg-4 col-md-5 col-sm-12 col-xs-12 ">
                    <p>...and receive  <span>$20</span>  coupon for first shopping.</p>
                    </div>
            </div>
            </div>
        </div>
    )
}

export default NewsLetter;
