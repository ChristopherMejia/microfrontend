import { useEffect, useState } from "react";

export const useColors = () => {
    const [color, setColor] = useState("000000");

    const [colorList, setColorList] = useState([]);

    const handleChangeColor = (event) => {
        setColor(event.target.value);
    }

    const handleSubmitSaveColor = (e) => {
        e.preventDefault();

        const copyColors = [ color, ...colorList];
        setColorList( copyColors);
        
    }

    useEffect( () => {
        localStorage.setItem("colors", JSON.stringify(color))
    },[])

    return {
        color, 
        colorList, 
        handleChangeColor, 
        handleSubmitSaveColor
    }
}