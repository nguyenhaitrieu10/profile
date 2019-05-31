import React from 'react';

function Blog() {
    return (
        <section className="colorlib-blog" data-section="blog">
            <div className="colorlib-narrow-content">
                <div className="row">
                    <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box"
                         data-animate-effect="fadeInLeft">
                        <span className="heading-meta">Read</span>
                        <h2 className="colorlib-heading">Recent Blog</h2>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-4 col-sm-6 animate-box" data-animate-effect="fadeInLeft">
                        <div className="blog-entry">
                            <a href="blog.html" className="blog-img">
                                <img src="images/python_book.jpg" className="img-responsive" alt="HTML5 Bootstrap Template by colorlib.com" />
                            </a>
                            <div className="desc">
                                <span><small>April 14, 2018 </small> | <small> Web Design </small> | <small> <i
                                    className="icon-bubble3"></i> 4</small></span>
                                <h3><a href="blog.html">Learn Basic Python by yourself</a></h3>
                                <p>I am pleased to introduce you my first book about Python.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 col-sm-6 animate-box" data-animate-effect="fadeInRight">
                        <div className="blog-entry">
                            <a href="blog.html" className="blog-img">
                                <img src="images/deep_learning.jpeg" className="img-responsive" alt="HTML5 Bootstrap Template by colorlib.com"/>
                            </a>
                            <div className="desc">
                                <span><small>April 14, 2018 </small> | <small> Web Design </small> | <small> <i
                                    className="icon-bubble3"></i> 4</small></span>
                                <h3><a href="blog.html">Understand what Deep Learning do</a></h3>
                                <p>Visualize and prove Deep Learning algorithm by Math.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 col-sm-6 animate-box" data-animate-effect="fadeInLeft">
                        <div className="blog-entry">
                            <a href="blog.html" className="blog-img"><img src="images/odoo10.png"
                                                                          className="img-responsive"
                                                                          alt="HTML5 Bootstrap Template by colorlib.com"/></a>
                            <div className="desc">
                                <span><small>April 14, 2018 </small> | <small> Inspiration </small> | <small> <i
                                    className="icon-bubble3"></i> 4</small></span>
                                <h3><a href="blog.html">Guid to install Odoo 10 step-by-step</a></h3>
                                <p>I found out that Odoo is one of the most terrible framework in installing. </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12 animate-box">
                        <p><a href="/" className="btn btn-primary btn-lg btn-load-more">Load more <i
                            className="icon-reload"></i></a></p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Blog;
