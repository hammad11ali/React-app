import React, { Component } from "react";
import { Link } from "react-router-dom";

class Login extends Component {
  state = {};
  render() {
    return (
      <div className="container">
        <h4>Material Design Login Form</h4>
        <div id="user-login" className="row">
          <div className="col s12 z-depth-6 card-panel">
            <form className="login-form">
              <div className="row margin">
                <div className="input-field col s12">
                  <i className="material-icons prefix">email</i>
                  <input className="validate" id="user_email" type="email" />
                  <label
                    htmlFor="email"
                    data-error="wrong"
                    data-success="right"
                    className="center-align"
                  >
                    Email
                  </label>
                </div>
              </div>
              <div className="row margin">
                <div className="input-field col s12">
                  <i className="material-icons prefix">lock_outline</i>
                  <input id="user_pass" type="password" />
                  <label htmlFor="password">Password</label>
                </div>
              </div>
              <div className="row">
                <div className="input-field col s12">
                  <button className="btn waves-effect waves-light col s2 offset-s5">
                    Login
                  </button>
                </div>
                <div className="input-field col s12">
                  <p className="center col s4 offset-s4">
                    {" "}
                    Don't have an account?
                    <Link to="/Signup">Register Now!</Link>
                  </p>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
