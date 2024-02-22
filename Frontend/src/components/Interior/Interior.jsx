import './Interior.css';
import Row1 from '../Row1/Row1';
import Row2 from '../Row2/Row2';
import React from 'react'

const Interior = ( props ) => {
  return (
    <div className='Interior'>
        <Row1 data={props.data}/>
        <Row2 data={props.data}/>
        <span>KIDS</span>
    </div>
  )
}

export default Interior