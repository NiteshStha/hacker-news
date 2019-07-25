import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class NavBar extends Component {
  render() {
    return (
      <div className="navBar">
        <h1>
          <Link to="/">Hacker News</Link>
        </h1>
      </div>
    );
  }
}

export default NavBar;
