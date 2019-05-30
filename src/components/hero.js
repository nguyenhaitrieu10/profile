import React from 'react';

function Hero() {
    return (
        <section id="colorlib-hero" className="js-fullheight" data-section="home">
            <div className="flexslider js-fullheight">
                <ul className="slides">
                    <li style={{backgroundImage: 'url(images/img_bg_1.jpg)'}}>
                        <div className="overlay" />
                        <div className="container-fluid">
                            <div className="row">
                                <div className="col-md-6 col-md-offset-3 col-md-pull-3 col-sm-12 col-xs-12 js-fullheight slider-text">
                                    <div className="slider-text-inner js-fullheight">
                                        <div className="desc">
                                            <h1>Hi! <br />I'm Hải Triều</h1>
                                            <h2>100% html5 bootstrap templates Made by <a href="https://colorlib.com/" target="_blank" rel="noopener noreferrer">colorlib.com</a></h2>
                                            <p><a href="https://drive.google.com/file/d/1EAwU7rzAbMwB7vvEw9iga-FeW3rzX_-7/view?usp=sharing" className="btn btn-primary btn-learn">Download CV <i className="icon-download4" /></a></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li style={{backgroundImage: 'url(images/img_bg_2.jpg)'}}>
                        <div className="overlay" />
                        <div className="container-fluid">
                            <div className="row">
                                <div className="col-md-6 col-md-offset-3 col-md-pull-3 col-sm-12 col-xs-12 js-fullheight slider-text">
                                    <div className="slider-text-inner">
                                        <div className="desc">
                                            <h1>I am <br />a Data Scientist and a Web Developer</h1>
                                            <h2>I am interested in Computer Vision, Data Science and Web Development, you can see my open source projects at my</h2>
                                            <p><a href="https://drive.google.com/file/d/1EAwU7rzAbMwB7vvEw9iga-FeW3rzX_-7/view?usp=sharing" className="btn btn-primary btn-learn">Github<i className="icon-github" /></a></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </section>
    );
}

export default Hero;
