import React from 'react';

function Service() {
    return (
        <section className="colorlib-services" data-section="services">
            <div className="colorlib-narrow-content">
                <div className="row">
                    <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
                        <span className="heading-meta">My Specialty</span>
                        <h2 className="colorlib-heading">My Skills</h2>
                    </div>
                </div>
                <div className="row row-pt-md">
                    <div className="col-md-4 text-center animate-box">
                        <div className="services color-1">
                            <span className="icon">
                              <i className="icon-bulb" />
                            </span>
                            <div className="desc">
                                <h3>Computer Vision</h3>
                                <p>Tensorflow, OpenCV</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 text-center animate-box">
                        <div className="services color-2">
                            <span className="icon">
                              <i className="icon-data" />
                            </span>
                            <div className="desc">
                                <h3>Data Analysis</h3>
                                <p>Scikit-learn, Selenium, Pandas</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 text-center animate-box">
                        <div className="services color-3">
                            <span className="icon">
                              <i className="icon-phone3" />
                            </span>
                            <div className="desc">
                                <h3>Application Development</h3>
                                <p>Flask, Django, NodeJS, React, Angular, Android</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 text-center animate-box">
                        <div className="services color-4">
                            <span className="icon">
                              <i className="icon-layers2" />
                            </span>
                            <div className="desc">
                                <h3>CI/CD</h3>
                                <p>Gitlab CI/CD</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 text-center animate-box">
                        <div className="services color-5">
                            <span className="icon">
                              <i className="icon-compass" />
                            </span>
                            <div className="desc">
                                <h3>Writing Book</h3>
                                <h3><a href="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2FRoboticsHCMUS%2Fposts%2F1341079622710113" target="_blank">"Tự học lập trình Python căn bản"</a></h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Service;
