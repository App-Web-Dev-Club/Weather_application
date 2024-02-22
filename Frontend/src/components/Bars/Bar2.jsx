import React from 'react';
import './Bar2.css';
import Progressbar from "../Card/progressbar";

const Bar2 = (props) => {
    return (
        <div className="Bar">
            <div className="radialBar">
            <Progressbar bgcolor={props.data.windmax_km_per_hr >= 20 ? props.data.windmax_km_per_hr >= 30 ? props.data.windmax_km_per_hr >= 60 ? "#F32424" : "#F66B0E" : "#FCD900" : "green"} progress={props.data.windmax_km_per_hr} height={5} />
            </div>
            <div className="detail">
                <span>Wind Speed</span>
                <span>{props.data.windmax_km_per_hr} km/h</span>
         
            </div>
        </div>
    )
}

export default Bar2;