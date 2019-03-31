import React from "react";
import { TextField } from "@material-ui/core";

class CellEditor extends React.Component {
  state = {
    value: this.props.value
  };

  /**
   * Ag-grid calls this function to get the final value once everything is updated.
   * DO NOT DELETE
   * @returns {String|Number} this.state.value
   */
  getValue() {
    return this.state.value;
  }

  handleChange = event => {
    this.setState({ value: event.target.value });
  };

  render() {
    return <TextField value={this.state.value} onChange={this.handleChange} />;
  }
}

export default CellEditor;
