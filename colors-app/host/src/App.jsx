import React, { useState } from "react";
import ReactDOM from "react-dom";
import ColorList from "ColorList/ColorList";
import {useColors} from "ColorPicker/useColors";
import ColorPicker from "ColorPicker/ColorPicker"

const App = () => {

  const { color, colorList, handleChangeColor, handleSubmitSaveColor} = useColors();
  return (
    <>
    <h1 className="text-center bg-dark text-white p-2"> Color Picker </h1>
    <div className="container mt-4">
        <div className="row">
          <div className="col-12 col-md-4">
            <ColorList colorList={colorList}/>
          </div>
          <div className="col-12 col-md-8"> 
            <ColorPicker
            color={color}
            handleChangeColor={handleChangeColor}
            handleSubmitSaveColor={handleSubmitSaveColor}
            />
          </div>
        </div>
    </div>
    </>
  )
};
ReactDOM.render(<App />, document.getElementById("app"));
