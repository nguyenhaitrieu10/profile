import React from 'react';


function Experience() {
    return (
        <section className="colorlib-experience" data-section="experience">
            <div className="colorlib-narrow-content">
                <div className="row">
                    <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
                        <span className="heading-meta">Experience</span>
                        <h2 className="colorlib-heading animate-box">Work Experience</h2>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12">
                        <div className="timeline-centered">
                            <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                                <div className="timeline-entry-inner">
                                    <div className="timeline-icon color-1">
                                        <i className="icon-pen2" />
                                    </div>
                                    <div className="timeline-label">
                                        <h2>Backend Web Developer<a href="https://teko.vn/home/"> at Teko Vietnam Technology JSC</a> <span>2018-now</span></h2>
                                        <ul>
                                            <li>Financial Management Service.</li>
                                            <li>Logistics Management Service.</li>
                                        </ul>
                                    </div>
                                </div>
                            </article>
                            <article className="timeline-entry animate-box" data-animate-effect="fadeInRight">
                                <div className="timeline-entry-inner">
                                    <div className="timeline-icon color-2">
                                        <i className="icon-pen2" />
                                    </div>
                                    <div className="timeline-label">
                                        <h2>Web Developer at <a href="http://goldeneyetech.com.vn/">Goldeneye Technologies </a> <span> 2017-2018</span></h2>
                                        <ul>
                                            <li>Website support online tutoring by WebRTC technology.</li>
                                        </ul>
                                    </div>
                                </div>
                            </article>
                            <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                                <div className="timeline-entry-inner">
                                    <div className="timeline-icon color-3">
                                        <i className="icon-pen2" />
                                    </div>
                                    <div className="timeline-label">
                                        <h2>Member <a href="https://ailab.hcmus.edu.vn/">at AILab</a> <span>2017-2019</span></h2>
                                        <ul>
                                            <li>Vietnamese Speech Recognition service for Vietnam National Assembly Meeting.</li>
                                            <li>Massive open online course (MOOC) provider based on EDX open source platform.</li>
                                            <li>Write and publish the "Tự học lập trình Python căn bản" book.</li>
                                        </ul>
                                    </div>
                                </div>
                            </article>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Experience;
