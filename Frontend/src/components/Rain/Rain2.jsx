import React from "react";
import './Rain2.css'

const Rain2 = (props) => {
    return (
        <div className="Atmos"
        style={{
            background: "linear-gradient(180deg, #323232 0%, #4a4a4b 100%)",
        }}
        >
            <h1>{props.data.precipitaion} mm</h1>
            <h4>Precipitation</h4>
        </div>
    )
}

export default Rain2;