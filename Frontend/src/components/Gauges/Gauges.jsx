import React from "react";
import Gauge1 from "../Gauge/Gauge1";
import Gauge2 from "../Gauge/Gauge2";
import './Gauges.css';

const Cards = (props) => {
    return (
        <div className="Gauges">
            <Gauge1 data={props.data}/>
            <Gauge2 data={props.data}/>
        </div>
    )
}

export default Cards