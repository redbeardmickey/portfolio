import React, { Component } from 'react';
import MyLogo from '../../components/mylogo/mylogo.js';
import Navigation from '../../components/navigation/navigation.js';
import './header.css';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selection: 'about'
    }
  }
  render() {
    return (
      <header className="my-header">
        <div className="max-width flex-bar">
          <div className="flex-bar-start flex align-items-center branding">
            <MyLogo></MyLogo>
            <span className="header-name">Mickey Li</span>
          </div>
          <div className="flex-bar">
            <Navigation selection={this.state.selection}></Navigation>
          </div>
        </div>

      </header>
    )
  }
}

export default Header
