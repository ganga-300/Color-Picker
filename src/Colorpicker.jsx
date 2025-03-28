import { useState } from "react"

function Colorpicker(){
    const [color , setcolor] = useState("#FFFFFF")

    function handleColorChanger(event){
        setcolor(event.target.value)
    }

    return(
        <>
        <div className="color-picker-container">
            <h1>COLOR PICKER</h1>
            <div className="color-display" style={{backgroundColor:color}}>
                <p>Selected Color: {color}</p>
            </div>
            <label>Select a color</label>
            <input type="color" value={color} onChange={handleColorChanger}/>
        </div>
        </>
    )
}

export default Colorpicker










