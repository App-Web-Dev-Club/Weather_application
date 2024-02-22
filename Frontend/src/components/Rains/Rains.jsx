import React from "react";
import Rain1 from "../Rain/Rain1";
import Rain2 from "../Rain/Rain2";
import Rain3 from "../Rain/Rain3";
import Rain4 from "../Rain/Rain4";
import './Rains.css'

const Rains = (props) => {
    return (
        <div className="Rains">
            <Rain1 data={props.data}/>
            <Rain2 data={props.data}/>
            <Rain3 data={props.data}/>
            <Rain4 data={props.data}/>
        </div>
    )
}

export default Rains;