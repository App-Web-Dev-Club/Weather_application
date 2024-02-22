import React from "react";
import "./Card3.css";
import "react-circular-progressbar/dist/styles.css";
import Progressbar from "./progressbar";

const Card3 = (props) => {
    return (
        <div className="Card"
        style={{
            background: "linear-gradient(180deg, #323232 0%, #4a4a4b 100%)",
        }}
        >
            <div className="radialBar">
            <Progressbar bgcolor={props.data.rain_mm >= 10 ? props.data.rain_mm >= 25 ? props.data.rain_mm >= 40 ? "#0E3EDA" : "#42C2FF" : "#85F4FF" : "#B8FFF9"} progress={props.data.rain_mm} height={5} />
            </div>
            <div className="detail">
                <span>Precipitation</span>
                <span>{props.data.rain_mm + " mm"}</span>
            </div>
        </div>
    )
}

export default Card3;