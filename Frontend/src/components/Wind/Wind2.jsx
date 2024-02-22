import React from "react";
import './Wind2.css'

const Wind2 = (props) => {
    return (
        <div className="Wind"
        style={{
            background: "linear-gradient(180deg, #323232 0%, #4a4a4b 100%)",
        }}
        >
            <h2>{props.data.wind_dir} ° {props.data.wind_dir_local}</h2>
            <h4>Wind Direction</h4>
        </div>
    )
}

export default Wind2;