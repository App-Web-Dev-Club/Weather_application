import React from 'react'

const Data5 = ( props ) => {
  const splRatio = Math.pow(10, (-38/20)) * 20e-6;
  const cdb = (val) =>{
    var spl;
    if(val === 0){
        spl = 25;
    }
    else{
        spl = (20*Math.log10(val/splRatio)-20)
        spl = Math.round(spl)-5;
    }
    return spl
}

  return (
    <div className='Data'
    style={{
        background: "linear-gradient(180deg, #323232 0%, #4a4a4b 100%)",
    }}
    >
        <h1>{cdb(props.data.Noise)} dB</h1>
        <h3>Noise</h3>
    </div>
  )
}

export default Data5