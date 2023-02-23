import React from "react";
import ReactDOM from "react-dom";
import {BrowserRouter, Routes, Route, Navigate} from "react-router-dom"

import { AboutPage, Characters, HomePage , NotFound } from "./pages"

import Navbar from "Navbar/Navbar"

import "./index.scss";

const App = () => (
  <BrowserRouter>
    <Navbar />
    <div className="m-5">

    <Routes>
        <Route path="/" element={ <HomePage/> }/>
        <Route path="/characters" element={ <Characters/> }/>
        <Route path="/about" element={ <AboutPage/> }/>
        <Route path="*" element={ <NotFound/> }/>
        /**
          manejo de rutas no agregadas, cuando se intente acceder a una ruta que no existe te 
          redireje a la ruta principal
         */
        {/* <Route path="*" element={ <Navigate to="/"/> }/> */} 
    </Routes>
    </div>
  </BrowserRouter>
);
ReactDOM.render(<App />, document.getElementById("app"));
