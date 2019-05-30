import React from 'react';

function SideBar() {
    return (
        <aside id="colorlib-aside" className="border js-fullheight">
            <div className="text-center">
                <div className="author-img" style={{backgroundImage: 'url(images/about.jpg)'}} />
                <h1 id="colorlib-logo"><a href="index.html">Nguyen Hai Trieu</a></h1>
                <h4>Tony Nguyen</h4>
                <span className="position"><a href="/">Data Scientist</a> &amp; Web Developer</span>
            </div>
            <nav id="colorlib-main-menu" role="navigation" className="navbar">
                <div id="navbar" className="collapse">
                    <ul>
                        <li className="active"><a href="/" data-nav-section="home">Home</a></li>
                        <li><a href="/" data-nav-section="about">About</a></li>
                        <li><a href="/" data-nav-section="services">Services</a></li>
                        <li><a href="/" data-nav-section="skills">Skills</a></li>
                        <li><a href="/" data-nav-section="education">Education</a></li>
                        <li><a href="/" data-nav-section="experience">Experience</a></li>
                        <li><a href="/" data-nav-section="work">Work</a></li>
                        <li><a href="/" data-nav-section="blog">Blog</a></li>
                        <li><a href="/" data-nav-section="contact">Contact</a></li>
                    </ul>
                </div>
            </nav>
            <div className="colorlib-footer">
                <p><small>
                    <i className="icon-compass" aria-hidden="true" /> Email: nguyenhaitrieu10@gmail.com
                    <span>Facebook: <a href="https://www.facebook.com/haitrieu.nguyen.180" target="_blank" rel="noopener noreferrer">haitrieu.nguyen.180</a></span></small></p>
                <ul>
                    <li><a href="/"><i className="icon-facebook2" /></a></li>
                    <li><a href="/"><i className="icon-twitter2" /></a></li>
                    <li><a href="/"><i className="icon-instagram" /></a></li>
                    <li><a href="/"><i className="icon-linkedin2" /></a></li>
                </ul>
            </div>
        </aside>
    );
}

export default SideBar;
