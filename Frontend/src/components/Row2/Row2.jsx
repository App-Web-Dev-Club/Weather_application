import React from 'react'
import Data4 from '../Data/Data4'
import Data5 from '../Data/Data5';
import './Row2.css'

const Row2 = ( props ) => {
  return (
    <div className='Rows'>
        <Data4 data={props.data}/>
        <Data5 data={props.data}/>
    </div>
  )
}

export default Row2