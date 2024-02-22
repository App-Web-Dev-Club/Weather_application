import React from "react";
import './Rain1.css'

const Rain1 = (props) => {
    return (
        <div className="Atmos"
        style={{
            background: "linear-gradient(180deg, #323232 0%, #4a4a4b 100%)",
        }}
        >
            <h1>{props.data.rain_prob}%</h1>
            <h4>Rain Probability</h4>
        </div>
    )
}

export default Rain1;