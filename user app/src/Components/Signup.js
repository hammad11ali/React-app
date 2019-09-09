import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import M from "materialize-css/dist/js/materialize.min.js";

class Signup extends Component {
  state = {
    user: {
      user_name: "",
      user_email: "",
      user_passw: "",
      confirm_pass: "",
      id: Math.random()
    },
    invalid_pass: "hide"
  };

  handleChange = e => {
    const new_user = { ...this.state.user, [e.target.id]: e.target.value };
    this.setState({
      user: new_user
    });
  };

  handleChange_in_Email = e => {
    const new_user = { ...this.state.user, [e.target.id]: e.target.value };
    this.setState({
      user: new_user
    });
  };

  handleConfirmPass = e => {
    const new_user = { ...this.state.user, confirm_pass: e.target.value };
    this.setState({
      user: new_user,
      invalid_pass: "hide"
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    if (this.state.user_passw === this.state.confirm_pass) {
      this.props.addUser(this.state.user);
      // Open Modal
      // Redirect to Login from Modal Close
      // Using Set time out for now
      setTimeout(() => {
        this.props.history.push("/Login");
      }, 100);
    } else {
      console.log("Password Donot Match");
      this.setState({
        invalid_pass: ""
      });
    }
  };

  render() {
    return (
      <div className="container">
        <h4>Material Design Register Form</h4>
        <div id="register-page" className="row">
          <div className="col s12 z-depth-6 card-panel">
            <form className="register-form" onSubmit={this.handleSubmit}>
              <div className="row margin">
                <div className="input-field col s12">
                  <i className="material-icons prefix">person_outline</i>
                  <input
                    id="user_name"
                    type="text"
                    onChange={this.handleChange}
                    required
                  />
                  <label htmlFor="user_name" className="center-align">
                    Username
                  </label>
                </div>
              </div>
              <div className="row margin">
                <div className="input-field col s12">
                  <i className="material-icons prefix">email</i>
                  <input
                    id="user_email"
                    type="email"
                    onChange={this.handleChange}
                    required
                  />
                  <label htmlFor="user_email" className="center-align">
                    Email
                  </label>
                </div>
              </div>
              <div className="row margin">
                <div className="input-field col s12">
                  <i className="material-icons prefix">lock_outline</i>
                  <input
                    id="user_passw"
                    type="password"
                    onChange={this.handleChange}
                    required
                  />
                  <label htmlFor="user_passw">Password</label>
                </div>
              </div>
              <div className="row margin">
                <div className="input-field col s12">
                  <i className="material-icons prefix">lock_outline</i>
                  <input
                    id="confirm_pass"
                    type="password"
                    onChange={this.handleConfirmPass}
                    required
                  />
                  <label htmlFor="confirm_pass">Re-type password</label>
                </div>
              </div>
              <p
                className={
                  "yellow lighten-3 red-text " + this.state.invalid_pass
                }
              >
                password Donot match
              </p>

              <div className="row">
                <div className="input-field col s12">
                  <button className="btn waves-effect waves-light col s3 offset-s4">
                    Register Now
                  </button>
                </div>
                <div className="input-field col s12">
                  <p className="center col s5 offset-s3">
                    Already have an account? <Link to="/Login">Login</Link>
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
    addUser: user => {
      dispatch({ type: "ADD_USER", user: user });
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(Signup));
