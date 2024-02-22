import React from "react";
import './Wind1.css'

const Wind1 = (props) => {
    return (
        <div className="Wind"
        style={{
            background: "linear-gradient(180deg, #323232 0%, #4a4a4b 100%)",
        }}
        >
            <h1>{props.data.wind_speed} km/h</h1>
            <h4>Wind Speed</h4>
        </div>
    )
}

export default Wind1;