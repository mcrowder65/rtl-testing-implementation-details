import React from "react";
import { render } from "react-testing-library";
import App from "../app";

test("that it renders without crashing", () => {
  render(<App />);
});
