import React, { Component } from "react";
import { connect } from "react-redux";

class Home extends Component {
  state = {
    userdata: ""
  };
  componentDidMount() {
    console.log("Current Id: " + this.props.Store.currentId);
    this.checkLogin();
  }
  checkLogin = () => {
    let user;
    if (this.props.Store.currentId != -1) {
      user = this.props.Store.Users.find(
        user => user.id === this.props.Store.currentId
      );
      console.log("jahshdjh");
      this.setState({
        userdata: (
          <div>
            <h4> {user.user_name} </h4>
            <p> email: {user.user_email}</p>
            <p> password: {user.user_passw}</p>
            <p> id: {user.id}</p>
          </div>
        )
      });
    } else {
      user = null;
    }
  };
  render() {
    return (
      <div className="container">
        <h2>Home</h2>
        {}
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
        {this.state.userdata}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    Store: state
  };
};

export default connect(mapStateToProps)(Home);
