import React from 'react';

function About() {
    return (
        <section className="colorlib-about" data-section="about">
            <div className="colorlib-narrow-content">
                <div className="row">
                    <div className="col-md-12">
                        <div className="row row-bottom-padded-sm animate-box" data-animate-effect="fadeInLeft">
                            <div className="col-md-12">
                                <div className="about-desc">
                                    <span className="heading-meta">About me</span>
                                    <h2 className="colorlib-heading">Who Am I?</h2>
                                    <p><strong>Hi I'm Trieu.</strong></p>
                                    <p>I am the one who have high passion in Computer Science.</p>
                                    <p>I love to develope the wonderful softwares which can bring value to sociaty in order to make a profit to my team.</p>
                                </div>
                            </div>
                        </div>
                        {/*<div className="row">*/}
                            {/*<div className="col-md-3 animate-box" data-animate-effect="fadeInLeft">*/}
                                {/*<div className="services color-1">*/}
                                    {/*<span className="icon2"><i className="icon-bulb" /></span>*/}
                                    {/*<h3>Computer Vision and Data Scient</h3>*/}
                                {/*</div>*/}
                            {/*</div>*/}
                            {/*<div className="col-md-3 animate-box" data-animate-effect="fadeInRight">*/}
                                {/*<div className="services color-2">*/}
                                    {/*<span className="icon2"><i className="icon-globe-outline" /></span>*/}
                                    {/*<h3>Web Development</h3>*/}
                                {/*</div>*/}
                            {/*</div>*/}
                            {/*<div className="col-md-3 animate-box" data-animate-effect="fadeInBottom">*/}
                                {/*<div className="services color-4">*/}
                                    {/*<span className="icon2"><i className="icon-phone3" /></span>*/}
                                    {/*<h3>Mobile Development</h3>*/}
                                {/*</div>*/}
                            {/*</div>*/}
                            {/*<div className="col-md-3 animate-box" data-animate-effect="fadeInTop">*/}
                                {/*<div className="services color-3">*/}
                                    {/*<span className="icon2"><i className="icon-data" /></span>*/}
                                    {/*<h3>CI/CD</h3>*/}
                                {/*</div>*/}
                            {/*</div>*/}
                        {/*</div>*/}
                        <div className="row">
                            <div className="col-md-12 animate-box" data-animate-effect="fadeInLeft">
                                <div className="hire">
                                    <h2>I love making new friends. If you find me interesting, let's chat with me!<br /></h2>
                                    <a href="https://www.facebook.com/haitrieu.nguyen.180" className="btn-hire">My facebook</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default About;
