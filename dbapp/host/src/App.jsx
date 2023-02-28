import React, {lazy, Suspense}from "react";
import ReactDOM from "react-dom";
import {BrowserRouter, Routes, Route, Navigate} from "react-router-dom"

import Navbar from "Navbar/Navbar"
// import Loader from "./components/Loader";
import { Characters, AboutPage, NotFound, HomePage, CharacterDetailsPage } from "./pages";

import "./index.scss";

// const {HomePage} = lazy( () => import( "./pages") )

const App = () => (
  <BrowserRouter>
    <Navbar />
    <div className="m-5">
    <Routes>
        <Route 
          path="/" 
          element={ 
          // <Suspense fallback={ <Loader/> }>
            <HomePage/> 
          // </Suspense>
        }/>

        <Route path="/characters" element={ <Characters/> }/>
        <Route path="/character/:id" element={ <CharacterDetailsPage/> }/>
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
