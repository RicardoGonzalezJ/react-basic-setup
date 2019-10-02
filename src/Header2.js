import React, { Component } from 'react';

class Header extends Component {
  render() {
    return (
      <header>
       <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <ul>
        <li><a href="#">Home</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Resume</a></li>
        <li><a href="#">Works</a></li>
        <li><a href="#">Testimonials</a></li>
        <li><a href="#">Contact</a></li>
        </ul>

       </nav>
      </header>
    )
  }
}

export default Header;
