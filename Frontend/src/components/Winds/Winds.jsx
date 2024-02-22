import React from "react";
import Wind1 from "../Wind/Wind1";
import Wind2 from "../Wind/Wind2";
import Wind3 from "../Wind/Wind3";
import './Winds.css'

const Winds = (props) => {
    return (
        <div className="Winds">
            <Wind1 data={props.data}/>
            <Wind2 data={props.data}/>
            <Wind3 data={props.data}/>
        </div>
    )
}

export default Winds;