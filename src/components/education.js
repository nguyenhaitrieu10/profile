import React from 'react';

function Education() {
    return (
        <section className="colorlib-education" data-section="education">
            <div className="colorlib-narrow-content">
                <div className="row">
                    <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
                        <span className="heading-meta">Education</span>
                        <h2 className="colorlib-heading animate-box">Education</h2>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12 animate-box" data-animate-effect="fadeInLeft">
                        <div className="fancy-collapse-panel">
                            <div className="panel-group" id="accordion" role="tablist" aria-multiselectable="true">
                                {/*<div className="panel panel-default">*/}
                                    {/*<div className="panel-heading" role="tab" id="headingOne">*/}
                                        {/*<h4 className="panel-title">*/}
                                            {/*<a data-toggle="collapse" data-parent="#accordion" href="#collapseOne" aria-expanded="true" aria-controls="collapseOne">Master Degree Graphic Design*/}
                                            {/*</a>*/}
                                        {/*</h4>*/}
                                    {/*</div>*/}
                                    {/*<div id="collapseOne" className="panel-collapse collapse in" role="tabpanel" aria-labelledby="headingOne">*/}
                                        {/*<div className="panel-body">*/}
                                            {/*<div className="row">*/}
                                                {/*<div className="col-md-6">*/}
                                                    {/*<p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. </p>*/}
                                                {/*</div>*/}
                                                {/*<div className="col-md-6">*/}
                                                    {/*<p>Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>*/}
                                                {/*</div>*/}
                                            {/*</div>*/}
                                        {/*</div>*/}
                                    {/*</div>*/}
                                {/*</div>*/}
                                <div className="panel panel-default">
                                    <div className="panel-heading" role="tab" id="headingTwo">
                                        <h4 className="panel-title">
                                            <a className="collapsed" data-toggle="collapse" data-parent="#accordion" href="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                                Bachelor Degree of Computer Science
                                            </a>
                                        </h4>
                                    </div>
                                    <div id="collapseTwo" className="panel-collapse collapse" role="tabpanel" aria-labelledby="headingTwo">
                                        <div className="panel-body">
                                            <p>VNUHCM - University of Science.</p>
                                            <ul>
                                                <li>I am an old member of <a href="https://ailab.hcmus.edu.vn/">Artificial Intelligence Lab (AILab)</a>.</li>
                                                <li>I am one of the authors of the "Tự học Lập trình Python căn bản" book.</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="panel panel-default">
                                    <div className="panel-heading" role="tab" id="headingFive">
                                        <h4 className="panel-title">
                                            <a className="collapsed" data-toggle="collapse" data-parent="#accordion" href="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                                                High School Education
                                            </a>
                                        </h4>
                                    </div>
                                    <div id="collapseFive" className="panel-collapse collapse" role="tabpanel" aria-labelledby="headingFive">
                                        <div className="panel-body">
                                            <p>BenTre High School for Gifted Students</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Education;
