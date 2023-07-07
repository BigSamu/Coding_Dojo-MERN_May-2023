import { useState } from "react";

let colors = ["#f10", "#1f0", "#10f"];

const Box = (props) => {

    const [style, setStyle] = useState({
        width: "300px",
        height: "300px",
        backgroundColor: "#f00"
    });

    return (
        <div onClick={()=> {
            let w = Math.random() * 1000
            let h = Math.random() * 1000
            let color_idx = Math.round(Math.random() * (colors.length))


            let new_style = {
                ...style,
                width: `${w}px`,
                height: `${h}px`,
                backgroundColor: colors[color_idx]
            }
            setStyle(new_style);
        }} 
            style={style}>
        </div>
    )
}


export default Box;