import React from "react";
import Cards from "../Cards/Cards";
import Time from "../Gauge/Time";
import Gauges from "../Gauges/Gauges";
import './MainDash.css';

const MainDash = ( props ) => {
    console.log(props.data)
    return (
        <div className="MainDash">
             <div className="heading">
             <span>KARUNYA </span>Now
             </div>
             <Cards data={props.data}/>
             <Gauges data={props.data}/>
             <Time data={props.data}/>
        </div>
    )
}

export default MainDash;