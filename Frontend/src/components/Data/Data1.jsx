import React from 'react';
import './Data1.css';

const Data1 = ( props ) => {
  return (
    <div className='Data'
    style={{
        background: "linear-gradient(180deg, #323232 0%, #4a4a4b 100%)",
    }}
    >
        <h1>{Math.round(props.data.Temperature_degC)} °C</h1>
        <h3>Atmospheric Temperature</h3>
    </div>
  )
}

export default Data1