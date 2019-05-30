import React from 'react';
import SideBar from './components/sidebar';
import Hero from './components/hero';
import About from './components/about';
import Service from './components/services';
import Counter from './components/counter';
// import Skills from './components/skills';
import Education from './components/education';
import Experience from './components/experience';
// import Work from './components/work';
import Blog from './components/blog';
import Contact from './components/contact';
import './App.css';

function App() {
  return (
    <div id="colorlib-page">
      <div id="container-wrap">
        <SideBar></SideBar>
        <div id="colorlib-main">
          <Hero></Hero>
          <About></About>
          <Service></Service>
          <Counter></Counter>
          {/*<Skills></Skills>*/}
          <Education></Education>
          <Experience></Experience>
          {/*<Work></Work>*/}
          <Blog></Blog>
          <Contact></Contact>
        </div>
      </div>
    </div>
  );
}

export default App;
