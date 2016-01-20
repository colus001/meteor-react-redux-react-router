import _ from 'lodash';
import React from 'react';
import { Link } from 'react-router';

export default class Navbar extends React.Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-light bg-faded" style={{ marginBottom: '1rem' }}>
          <div className="nav navbar-nav">
            <Link className="nav-item nav-link" to="/">Home</Link>
            <Link className="nav-item nav-link" to="/hello">Hello</Link>
          </div>
        </nav>

        {this.props.children}
      </div>
    )
  }
}

this.Navbar = Navbar;
