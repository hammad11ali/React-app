import React, { Component } from "react";
import M from "materialize-css/dist/js/materialize.min.js";

class Modal extends Component {
  state = {};
  componentDidMount() {
    var elems = document.querySelectorAll(".modal");
    var instances = M.Modal.init(elems);
  }
  render() {
    return (
      <div id="modal1" class="modal">
        <div class="modal-content">
          <h5>{this.props.event}</h5>
          <p>{this.props.details}</p>
        </div>
        <div class="modal-footer">
          <button
            onClick={this.props.close}
            class="modal-close waves-effect waves-green btn-flat"
          >
            Ok
          </button>
        </div>
      </div>
    );
  }
}

export default Modal;
