import React from "react";
import './Rain3.css'

const Rain3 = (props) => {
    return (
        <div className="Atmos"
        style={{
            background: "linear-gradient(180deg, #323232 0%, #4a4a4b 100%)",
        }}
        >
            <h1>{props.data.hours_of_rain} hrs</h1>
            <h4>Hours of Rain</h4>
        </div>
    )
}

export default Rain3;