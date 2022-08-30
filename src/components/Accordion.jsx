import React, { Component } from "react";
import "./Accordion.css";

class Accordion extends Component {
  state = {
    isToggled: false,
  };

  toggle = () => {
    this.setState({ ...this.state, isToggled: !this.state.isToggled });
  };

  renderPanel() {
    return this.state.isToggled && <p>This is an Accordion</p>;
  }

  render() {
    return (
      <div>
        <button className="accordion" onClick={this.toggle}>
          Section
        </button>
        <div className={this.getPanelClasses()}>{this.renderPanel()}</div>
      </div>
    );
  }

  getPanelClasses() {
    let classes = "panel ";
    classes += !this.state.isToggled ? "disappear-panel" : "active";
    return classes;
  }
}

export default Accordion;
