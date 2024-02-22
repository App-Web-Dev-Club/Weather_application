import React from "react";
import './Atmos2.css'

const Atmos2 = (props) => {
    return (
        <div className="Atmos"
        style={{
            background: "linear-gradient(180deg, #323232 0%, #4a4a4b 100%)",
        }}
        >
            <h1>{props.data.hours_of_sunlight} hrs</h1>
            <h4>Hours of Sunlight</h4>
        </div>
    )
}

export default Atmos2;