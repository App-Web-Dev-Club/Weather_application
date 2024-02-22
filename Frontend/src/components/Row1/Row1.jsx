import React from 'react'
import Data1 from '../Data/Data1';
import Data2 from '../Data/Data2';
import Data3 from '../Data/Data3';
import './Row1.css'

const Row1 = ( props ) => {
  return (
    <div className='Rows'>
        <Data1 data={props.data}/>
        <Data2 data={props.data}/>
        <Data3 data={props.data}/>
    </div>
  )
}

export default Row1