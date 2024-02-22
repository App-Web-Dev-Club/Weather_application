import React from "react";
import './Wind3.css'

const Wind3 = (props) => {
    return (
        <div className="Wind"
        style={{
            background: "linear-gradient(180deg, #323232 0%, #4a4a4b 100%)",
        }}
        >
            <h1>{props.data.air_quality}</h1>
            <h4>Air Quality</h4>
        </div>
    )
}

export default Wind3;