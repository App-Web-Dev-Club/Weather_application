import React from "react";
import './Atmos3.css'

const Atmos3 = (props) => {
    return (
        <div className="Atmos"
        style={{
            background: "linear-gradient(180deg, #323232 0%, #4a4a4b 100%)",
        }}
        >
            <h1>{props.data.cloud_cover}%</h1>
            <h4>Cloud Cover</h4>
        </div>
    )
}

export default Atmos3;