import { useEffect, useState } from "react";
import { getLastColor, getColorList } from "../helpers/getColors";

export const useColors = () => {
    const [color, setColor] = useState(getLastColor());

    const [colorList, setColorList] = useState( getColorList() );
    const handleChangeColor = (event) => {
        setColor(event.target.value);
    }

    const handleSubmitSaveColor = (e) => {
        e.preventDefault();

        const copyColors = [ color, ...colorList];
        setColorList( copyColors);
    }

    useEffect( () => {
        localStorage.setItem("colors", JSON.stringify(colorList))
    },[colorList])

    return {
        color, 
        colorList, 
        handleChangeColor, 
        handleSubmitSaveColor
    }
}