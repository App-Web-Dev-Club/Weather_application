import React from "react";
import './Atmos1.css'

const Atmos1 = (props) => {
    return (
        <div className="Atmos"
        style={{
            background: "linear-gradient(180deg, #323232 0%, #4a4a4b 100%)",
        }}
        >
                <div className="atmos1">
                <h2>{props.data.min_temp}°C</h2>
                <h3>-</h3>
                <h2>{props.data.max_temp}°C</h2>
                </div>
                <div className="atmos">
                <h4>Atmospheric Temperature</h4>
                </div>
        </div>
    )
}

export default Atmos1;