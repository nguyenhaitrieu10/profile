import React from 'react';

function Contact() {
    return (
        <section className="colorlib-contact" data-section="contact">
            <div className="colorlib-narrow-content">
                <div className="row">
                    <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
                        <span className="heading-meta">Get in Touch</span>
                        <h2 className="colorlib-heading">Contact</h2>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-5">
                        <div className="colorlib-feature colorlib-feature-sm animate-box" data-animate-effect="fadeInLeft">
                            <div className="colorlib-icon">
                                <i className="icon-globe-outline" />
                            </div>
                            <div className="colorlib-text">
                                <p><a href="https://www.facebook.com/haitrieu.nguyen.180">Nguyễn Hải Triều</a></p>
                            </div>
                        </div>
                        <div className="colorlib-feature colorlib-feature-sm animate-box" data-animate-effect="fadeInLeft">
                            <div className="colorlib-icon">
                                <i className="icon-map" />
                            </div>
                            <div className="colorlib-text">
                                <p>nguyenhaitrieu10@gmail.com</p>
                            </div>
                        </div>
                        <div className="colorlib-feature colorlib-feature-sm animate-box" data-animate-effect="fadeInLeft">
                            <div className="colorlib-icon">
                                <i className="icon-phone" />
                            </div>
                            <div className="colorlib-text">
                                <p><a href="tel://">0886370391</a></p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-7 col-md-push-1">
                        <div className="row">
                            <div className="col-md-10 col-md-offset-1 col-md-pull-1 animate-box" data-animate-effect="fadeInRight">

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Contact;
