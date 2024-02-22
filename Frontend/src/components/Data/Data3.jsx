import React from 'react'

const Data3 = ( props ) => {
  return (
    <div className='Data'
    style={{
        background: "linear-gradient(180deg, #323232 0%, #4a4a4b 100%)",
    }}
    >
        <h1>{Math.round(props.data.Pressure_hPa)} hPa</h1>
        <h3>Atmospheric Pressure</h3>
    </div>
  )
}

export default Data3