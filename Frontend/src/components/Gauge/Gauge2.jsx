import React from 'react';
import 'degrees-to-direction';
import './Gauge2.css'

const Gauge2 = (props) => {
    var d2d = require('degrees-to-direction');
    return (
        <div>
        <div className="GaugeBar">
                <h1>{d2d(props.data.WDavg_deg)}</h1>
            </div>
            <div className="detail">
                <span>Wind Direction</span>
                <span>{props.data.WDavg_deg} &deg;</span>
            </div>
            </div>
    )
}

export default Gauge2;