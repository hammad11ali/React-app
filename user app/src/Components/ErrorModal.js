import React, { Component } from "react";
import M from "materialize-css/dist/js/materialize.min.js";

class ErrorModal extends Component {
  state = {};
  componentDidMount() {
    var elems = document.querySelectorAll(".modal");
    var instances = M.Modal.init(elems);
  }
  render() {
    return (
      <div id="modal1" class="modal">
        <div class="modal-content">
          <h5>Error Occured during {this.props.event}</h5>
          <p>{this.props.errorDetail}</p>
        </div>
        <div class="modal-footer">
          <button class="modal-close waves-effect waves-green btn-flat">
            Ok
          </button>
        </div>
      </div>
    );
  }
}

export default ErrorModal;
