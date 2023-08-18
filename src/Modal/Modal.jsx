import "./Modal.css";
import React from "react";

export default class Modal extends React.Component {
  state = {
    isOpen: false,
  };

  render() {
    return (
      <React.Fragment>
        <button onClick={() => this.setState({ isOpen: true })}>
          Open modal
        </button>

        {this.state.isOpen && (
          <div className="modal">
            <div className="modal-body">
              <h1>Hey!</h1>
              <p>This is a mini project &#128513; </p>
              <button
                onClick={() => {
                  this.setState({ isOpen: false });
                }}
              >
                Close modal
              </button>
            </div>
          </div>
        )}
      </React.Fragment>
    );
  }
}
