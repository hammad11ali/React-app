import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import { connect } from "react-redux";

class Login extends Component {
  state = {
    user_email: "",
    user_pass: ""
  };
  handleChange = e => {
    this.setState({
      [e.target.id]: e.target.value
    });
  };
  handleSubmit = e => {
    e.preventDefault();

    let i = 0;
    let users = this.props.Store.Users;
    for (i = 0; i < users.length; i++) {
      if (
        users[i].user_email === this.state.user_email &&
        users[i].user_passw === this.state.user_pass
      ) {
        this.props.login(users[i].id);
        // Redirect to Home from Modal Close
        // Using Set time out for now
        setTimeout(() => {
          this.props.history.push("/");
        }, 100);
      }
    }
  };
  render() {
    return (
      <div className="container">
        <h4>Material Design Login Form</h4>
        <div id="user-login" className="row">
          <div className="col s12 z-depth-6 card-panel">
            <form onSubmit={this.handleSubmit} className="login-form">
              <div className="row margin">
                <div className="input-field col s12">
                  <i className="material-icons prefix">email</i>
                  <input
                    onChange={this.handleChange}
                    className="validate"
                    id="user_email"
                    type="email"
                    required
                  />
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
                  <input
                    onChange={this.handleChange}
                    id="user_pass"
                    type="password"
                    required
                  />
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

const mapStateToProps = state => {
  return {
    Store: state
  };
};

const mapDispatchToProps = dispatch => {
  return {
    login: id => {
      dispatch({ type: "LOGIN", id: id });
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(Login));
