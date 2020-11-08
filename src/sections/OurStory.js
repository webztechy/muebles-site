import React from 'react';
import config from '../helpers/Config';

const TopSales = () => {
    return (
        <div className="ps-section ps-home-blog pt-80 pb-80">
            <div className="ps-container">
            <div className="ps-section__header mb-50">
                <h2 className="ps-section__title" data-mask="News">- Our Story</h2>
                <div className="ps-section__action"><a className="ps-morelink text-uppercase" href="#">View all post<i className="fa fa-long-arrow-right"></i></a></div>
            </div>
            <div className="ps-section__content">
                <div className="row">
                    <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12 ">
                        <div className="ps-post">
                        <div className="ps-post__thumbnail"><a className="ps-post__overlay" href="blog-detail.html"></a><img src={`${config.assets_url}images/blog/1.jpg`} alt="" /></div>
                        <div className="ps-post__content"><a className="ps-post__title" href="blog-detail.html">An Inside Look at the Breaking2 Kit</a>
                            <p className="ps-post__meta"><span>By:<a className="mr-5" href="blog.html">Alena Studio</a></span> -<span className="ml-5">Jun 10, 2017</span></p>
                            <p>Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster collaborative thinking to further…</p><a className="ps-morelink" href="blog-detail.html">Read more<i className="fa fa-long-arrow-right"></i></a>
                        </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12 ">
                        <div className="ps-post">
                        <div className="ps-post__thumbnail"><a className="ps-post__overlay" href="blog-detail.html"></a><img src={`${config.assets_url}images/blog/2.jpg`} alt="" /></div>
                        <div className="ps-post__content"><a className="ps-post__title" href="blog-detail.html">Unpacking the Breaking2 Race Strategy</a>
                            <p className="ps-post__meta"><span>By:<a className="mr-5" href="blog.html">Alena Studio</a></span> -<span className="ml-5">Jun 10, 2017</span></p>
                            <p>Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster collaborative thinking to further…</p><a className="ps-morelink" href="blog-detail.html">Read more<i className="fa fa-long-arrow-right"></i></a>
                        </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12 ">
                        <div className="ps-post">
                        <div className="ps-post__thumbnail"><a className="ps-post__overlay" href="blog-detail.html"></a><img src={`${config.assets_url}images/blog/3.jpg`} alt="" /></div>
                        <div className="ps-post__content"><a className="ps-post__title" href="blog-detail.html">Nike’s Latest Football Cleat Breaks the Mold</a>
                            <p className="ps-post__meta"><span>By:<a className="mr-5" href="blog.html">Alena Studio</a></span> -<span className="ml-5">Jun 10, 2017</span></p>
                            <p>Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster collaborative thinking to further…</p><a className="ps-morelink" href="blog-detail.html">Read more<i className="fa fa-long-arrow-right"></i></a>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        </div>
    )
}

export default TopSales;
