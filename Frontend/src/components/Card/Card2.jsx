import React from "react";
import "./Card2.css";
import "react-circular-progressbar/dist/styles.css";
import Progressbar from "./progressbar";

const Card2 = (props) => {
    return (
        <div className="Card"
        style={{
            background: "linear-gradient(180deg, #323232 0%, #4a4a4b 100%)",
        }}
        >
            <div className="radialBar">
            <Progressbar bgcolor={props.data.RHavg_percentage >= 20 ? props.data.RHavg_percentage >= 30 ? props.data.RHavg_percentage >= 60 ? "green" : "#FCD900" : "#F66B0E" : "#F32424"} progress={props.data.RHavg_percentage} height={5} />
            </div>
            <div className="detail">
                <span>Relative Humidity</span>
                <span>{props.data.RHavg_percentage} %</span>
            </div>
        </div>
    )
}

export default Card2;