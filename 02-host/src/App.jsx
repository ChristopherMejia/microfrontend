import React from "react";
import ReactDOM from "react-dom";

import Navbar from "navbar/Navbar"
import Counter from "counter/Counter"

import "./index.css"

const App = () => (
  <>
    <Navbar/>

    <div className="container">

      <Counter/>
    </div>

  </>
);
ReactDOM.render(<App />, document.getElementById("app"));
