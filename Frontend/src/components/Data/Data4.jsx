import React from 'react'

const Data4 = ( props ) => {
  return (
    <div className='Data'
    style={{
        background: "linear-gradient(180deg, #323232 0%, #4a4a4b 100%)",
    }}
    >
        <h2>{props.data.LightIntensity_lux} lux</h2>
        <h3>Light Intensity</h3>
    </div>
  )
}

export default Data4