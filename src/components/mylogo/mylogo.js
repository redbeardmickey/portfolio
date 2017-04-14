import React, { Component } from 'react';
import './mylogo.css'

class MyLogo extends Component {
  render() {
    return (
      <div className="mylogo">
        <div className="mylogo-circle"></div>
          <span className="mylogo-line"></span>
          <span className="mylogo-line"></span>
          <span className="mylogo-line"></span>
          <span className="mylogo-line"></span>
      </div>
    )
  }
}

export default MyLogo
