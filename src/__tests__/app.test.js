import React from "react";
import { render } from "react-testing-library";
import App from "../app";

test("that it renders without crashing", () => {
  render(<App />);
});

test("that getData returns this.state.data", () => {
  const ref = React.createRef();
  render(<App ref={ref} />);
  expect(ref.current.getData()).toEqual(ref.current.state.data);
});
