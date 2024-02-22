import React from 'react'

const Data2 = ( props ) => {
  return (
    <div className='Data'
    style={{
        background: "linear-gradient(180deg, #323232 0%, #4a4a4b 100%)",
    }}
    >
        <h1>{props.data.Humidity_rH}</h1>
        <h3>Humidity</h3>
    </div>
  )
}

export default Data2