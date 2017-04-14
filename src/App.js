import React, { Component } from 'react';
import Header from './components/header/header.js';
import Footer from './components/footer/footer.js';
import About from './components/about/about.js';
import './App.css';

require('smoothscroll-polyfill').polyfill();

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      section: 'about'
    }
  }
  render() {
    return (
      <div className="my-portfolio">
        <Header></Header>
        <About></About>
        <Footer></Footer>
      </div>
    );
  }
}

export default App;
