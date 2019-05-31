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
                        <span className="colorlib-counter js-counter" data-from={5} data-to={5} data-speed={5000} data-refresh-interval={50} />
                        <span className="colorlib-counter-label">IT Posts</span>
                    </div>
                    <div className="col-md-3 text-center animate-box">
                        <span className="colorlib-counter js-counter" data-from={6} data-to={6} data-speed={5000} data-refresh-interval={50} />
                        <span className="colorlib-counter-label">Projects</span>
                    </div>
                    <div className="col-md-3 text-center animate-box">
                        <span className="colorlib-counter js-counter" data-from={1} data-to={1} data-speed={5000} data-refresh-interval={50} />
                        <span className="colorlib-counter-label">Books</span>
                    </div>
                    <div className="col-md-3 text-center animate-box">
                        <span className="colorlib-counter js-counter" data-from={22} data-to={22} data-speed={5000} data-refresh-interval={50} />
                        <span className="colorlib-counter-label">Age</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Counter;
