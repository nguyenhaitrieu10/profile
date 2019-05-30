import React from 'react';

function Counter() {
    return (
        <div id="colorlib-counter" className="colorlib-counters" style={{backgroundImage: 'url(images/cover_bg_1.jpg)'}} data-stellar-background-ratio="0.5">
            <div className="overlay" />
            <div className="colorlib-narrow-content">
                <div className="row">
                </div>
                <div className="row">
                    <div className="col-md-3 text-center animate-box">
                        <span className="colorlib-counter js-counter" data-from={0} data-to={309} data-speed={5000} data-refresh-interval={50} />
                        <span className="colorlib-counter-label">Cups of coffee</span>
                    </div>
                    <div className="col-md-3 text-center animate-box">
                        <span className="colorlib-counter js-counter" data-from={0} data-to={356} data-speed={5000} data-refresh-interval={50} />
                        <span className="colorlib-counter-label">Projects</span>
                    </div>
                    <div className="col-md-3 text-center animate-box">
                        <span className="colorlib-counter js-counter" data-from={0} data-to={30} data-speed={5000} data-refresh-interval={50} />
                        <span className="colorlib-counter-label">Clients</span>
                    </div>
                    <div className="col-md-3 text-center animate-box">
                        <span className="colorlib-counter js-counter" data-from={0} data-to={10} data-speed={5000} data-refresh-interval={50} />
                        <span className="colorlib-counter-label">Partners</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Counter;
