import React from "react";
import { render } from "react-testing-library";
import CustomCell from "../custom-cell";

test("that getData returns this.state.data", () => {
  const ref = React.createRef();
  render(<CustomCell ref={ref} />);
  expect(ref.current.getValue()).toEqual(ref.current.state.value);
});
