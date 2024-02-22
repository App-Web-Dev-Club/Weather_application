import React from "react";
import Atmos1 from "../Atmosphere/Atmos1";
import Atmos2 from "../Atmosphere/Atmos2";
import Atmos3 from "../Atmosphere/Atmos3";
import Atmos4 from "../Atmosphere/Atmos4";
import './Atmospheres.css'

const Atmospheres = (props) => {
    return (
        <div className="Atmospheres">
            <Atmos1 data={props.data}/>
            <Atmos2 data={props.data}/>
            <Atmos3 data={props.data}/>
            <Atmos4 data={props.data}/>
        </div>
    )
}

export default Atmospheres;