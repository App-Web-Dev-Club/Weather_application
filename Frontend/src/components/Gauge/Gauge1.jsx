import GaugeChart from 'react-gauge-chart';
import React from 'react';

const Gauge1 = (props) => {
    return (
        <div>
        <div className="GaugeBar">
                <GaugeChart 
                nrOfLevels={30}
                arcsLength={[0.2, 0.4, 0.2]}
                colors={['#5BE12C', '#FCD900', '#F32424']}
                arcWidth={0.1} 
                percent={props.data.solrad_w_per_m2/10} 
                hideText='true'
                needleColor='white'
              />
            </div>
            <div className="detail">
                <span>Solar Radiation</span>
                <span>{props.data.solrad_w_per_m2} W/m²</span>
            </div>
            </div>
    )
}

export default Gauge1;