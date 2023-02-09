import React from "react";
import ReactDOM from "react-dom";
import Counter from "./components/Counter";

import "./index.css";

const App = () => (
  <Counter/>
);
ReactDOM.render(<App />, document.getElementById("app"));
