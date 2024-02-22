import React, { useState, useEffect } from 'react';
import Interior from '../components/Interior/Interior';
import './Kids.css';

const Kids = () => {

    const axios = require('axios').default;

    const url = 'http://127.0.0.1:8000/ctc';
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
            <Interior data={data}/>
        )
    }
    
}

export default Kids;