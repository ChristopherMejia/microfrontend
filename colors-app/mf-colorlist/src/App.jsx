import React from "react";
import ReactDOM from "react-dom";
import ColorList from "./components/ColorList";

import "./index.css";

const App = () => {
  return(
    <>
      <ColorList colorList={[]}/>
      <ColorList colorList={["#435623", "#569854"]}/>
    </>
  
)};
ReactDOM.render(<App />, document.getElementById("app"));
