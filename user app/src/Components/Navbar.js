import React, { Component } from "react";
import { Link } from "react-router-dom";
import M from "materialize-css/dist/js/materialize.min.js";

class Navbar extends Component {
  state = {};
  componentDidMount() {
    var elem = document.querySelector(".sidenav");
    var instance = M.Sidenav.init(elem, {
      edge: "left",
      inDuration: 250
    });
  }
  render() {
    return (
      <div>
        <nav className="nav-wrapper">
          <div className="container">
            <div className="l1"></div>
            <a href="#!" className="brand-logo">
              Logo
            </a>
            <a href="#" data-target="mobile-demo" className="sidenav-trigger">
              <i className="material-icons">menu</i>
            </a>
            <ul className="right hide-on-med-and-down">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/Login">Login</Link>
              </li>
              <li>
                <Link to="/Signup">SignUp</Link>
              </li>
            </ul>
          </div>
        </nav>

        <ul className="sidenav" id="mobile-demo">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/Login">Login</Link>
          </li>
          <li>
            <Link to="/Signup">SignUp</Link>
          </li>
        </ul>
      </div>
    );
  }
}

export default Navbar;
