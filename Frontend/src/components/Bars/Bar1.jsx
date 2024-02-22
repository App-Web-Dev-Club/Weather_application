import React from 'react';
import './Bar1.css';
import Progressbar from "../Card/progressbar";

const Bar1 = (props) => {
    return (
        <div className="Bar">
            <div className="radialBar">
            <Progressbar bgcolor={props.data.ap_mb >= 20 ? props.data.ap_mb >= 30 ? props.data.ap_mb >= 60 ? "#F32424" : "#F66B0E" : "#FCD900" : "green"} progress={props.data.ap_mb} height={5} />
            </div>
            <div className="detail">
                <span>Atmospheric Pressure</span>
                <span>{props.data.ap_mb} kPa</span>
            </div>
        </div>
    )
}

export default Bar1;