import React from 'react';
import Atmospheres from '../Atmospheres/Atmospheres';
import Rains from '../Rains/Rains';
import Winds from '../Winds/Winds';
import './Center.css'

const Center = ( props ) => {

    return (
        <div className='Center'>
            <Atmospheres data={props.data}/>
            <Rains data={props.data}/>
            <Winds data={props.data}/><br/>
            <span>{props.data.phrase}</span>
        </div>
    )
}
    
export default Center;