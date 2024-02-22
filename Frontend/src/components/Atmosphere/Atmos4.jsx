import React from "react";
import './Atmos4.css'

const Atmos4 = (props) => {
    return (
        <div className="Atmos"
        style={{
            background: "linear-gradient(180deg, #323232 0%, #4a4a4b 100%)",
        }}
        >
            <h2>{props.data.solar_radiation} </h2>
            <h4>Solar Radiation</h4>
        </div>
    )
}

export default Atmos4;