import React from "react";
import './Rain4.css'

const Rain4 = (props) => {
    return (
        <div className="Atmos"
        style={{
            background: "linear-gradient(180deg, #323232 0%, #4a4a4b 100%)",
        }}
        >
            <h1>{props.data.thunderstorm_prob}%</h1>
            <h4>Thunderstorm Probability</h4>
        </div>
    )
}

export default Rain4;