import React, { useState, useEffect } from 'react';
import Center from '../components/Center/Center';
import './Predict.css'

function Predict() {

    const axios = require('axios').default;

    const url = 'http://127.0.0.1:8000/predict';
    const [data, setData] = useState(null);

    const getData = async () => {
        const arr  = await axios.get(url);
        console.log(arr)
        setData(arr.data[0]);
    }
    useEffect(() => {
       getData();
    },[]);

    if(data){
        return (
            <div className='Predict'>
               <Center data={data}/>
            </div>
        )
    }
}
    
export default Predict;
    