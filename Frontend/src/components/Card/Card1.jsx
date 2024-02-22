import React from "react";
import "./Card1.css";
import "react-circular-progressbar/dist/styles.css";
import Progressbar from "./progressbar";

const Card1 = (props) => {
    return (
        <div className="Card"
        style={{
            background: "linear-gradient(180deg, #323232 0%, #4a4a4b 100%)",
        }}
        >
            <div className="radialBar">
                <Progressbar bgcolor={props.data.ATavg_degC >= 10 ? props.data.ATavg_degC >= 20 ? props.data.ATavg_degC >= 30 ? "#F32424" : "#F66B0E" : "#FCD900" : "blue"} progress={props.data.ATavg_degC*2} height={5} />
            </div>
            <div className="detail">
                <span>Atmospheric Temperature</span>
                <span>{props.data.ATavg_degC} &deg; C</span>
            </div>
        </div>
    )
}

export default Card1;