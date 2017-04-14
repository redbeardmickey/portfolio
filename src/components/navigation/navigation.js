import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './navigation.css';

class Navigation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selection: 0, // default to first nav item
    };

    this.handleSelect = this.handleSelect.bind(this);
  }

  handleSelect(event) {
    this._focusOn(event.currentTarget);
    let sectionID = event.currentTarget.href.split("#")[1];
    document.getElementById(sectionID).scrollIntoView({ behavior: 'smooth' });

    this.setState({ selection: this._getItemIndex(event.currentTarget) });
  }

  componentDidMount() {
    this._navItemsArr = Array.prototype.slice.call(
      ReactDOM.findDOMNode(this).getElementsByClassName('nav-item')
    );

    this._linesArr =  Array.prototype.slice.call(
      ReactDOM.findDOMNode(this).getElementsByClassName('line')
    );

    this._focusOn(ReactDOM.findDOMNode(this).getElementsByClassName('nav-item')[this.state.selection])
  }

  _getItemIndex(element) {
    return this._navItemsArr.indexOf(element);
  }

  _focusOn(target) {
    let index = this._navItemsArr.indexOf(target);
    let left = target.offsetLeft;
    let width = target.clientWidth;
    let center = left + width/2 - 47.5;

    if(this.state.selection < index) {
      this._animateLines(center, 'next')
    } else {
      this._animateLines(center, 'back')
    }
  }

  _animateLines(targetX, direction) {
    let length = this._linesArr.length - 1;

    if(direction === 'next') {
      this._linesArr.forEach((line, index) => {
        let dx = targetX + index * 5;
        line.style.transform = 'translate(' + dx + 'px, 0) skew(135deg)';
        line.style.transitionDelay = (length - index) * 30 + 'ms';
      })
    } else {
      this._linesArr.forEach((line, index) => {
        let dx = targetX + index * 5;
        line.style.transform = 'translate(' + dx + 'px, 0) skew(135deg)';
        line.style.transitionDelay = index * 30 + 'ms';
      })
    }

  }

  render() {
    return (
      <nav>
        <span>
          <span className="line"></span>
          <span className="line"></span>
          <span className="line"></span>
          <span className="line"></span>
        </span>
        <div className="flex">
          <a href="#about" className="nav-item" onClick={this.handleSelect}>
            <span className="nav-item-text">About</span>
          </a>
          <a href="#work" className="nav-item" onClick={this.handleSelect}>
            <span className="nav-item-text">Work</span>
          </a>
          <a href="#resume" className="nav-item" onClick={this.handleSelect}>
            <span className="nav-item-text">Resume</span>
          </a>
        </div>
      </nav>

    )
  }
}

export default Navigation;
