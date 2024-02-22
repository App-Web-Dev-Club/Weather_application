import Card1 from "../Card/Card1";
import Card2 from "../Card/Card2";
import Card3 from "../Card/Card3";
import React from "react";
import './Cards.css';

const Cards = ( props ) => {
    return (
        <div className="Cards">
            <Card1 data={props.data}/>
            <Card2 data={props.data}/>
            <Card3 data={props.data}/>
        </div>
    )
}

export default Cards