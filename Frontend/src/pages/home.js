import RightPanel from '../components/RightPanel/RightPanel';
import MainDash from '../components/MainDash/MainDash';
import axios from 'axios';
import './home.css';
import { useState, useEffect } from 'react';
const Home = () => {
    const [data, setData] = useState(null);
    const getData = async () => {
        const value  = await axios.get(`http://127.0.0.1:8000/`);
        console.log(value)
        setData(value.data[0]);
    }
    useEffect(() => {
       getData();
    },[]); // <- add empty brackets here
    
    if(data){
        return (
            <div className='home'>
                <MainDash data={data}/>
                <RightPanel data={data}/>
            </div>
        )
    }
    

}

export default Home;