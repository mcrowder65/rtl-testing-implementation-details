import React from "react";
import { TextField } from "@material-ui/core";

class CellEditor extends React.Component {
  state = {
    value: this.props.value
  };
  getValue() {
    return this.state.value;
  }

  handleChange = event => {
    this.setState({ value: event.target.value });
  };

  /**
   * Function which gets called by ag grid so that the cell will popup
   * properly when editing.
   * THIS FUNCTION SHOULD ALWAYS RETURN TRUE
   * @returns {boolean} true always
   */
  isPopup() {
    return true;
  }
  render() {
    return <TextField value={this.state.value} onChange={this.handleChange} />;
  }
}

export default CellEditor;
