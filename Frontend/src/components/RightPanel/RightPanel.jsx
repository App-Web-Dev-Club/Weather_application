import React from "react";
import Bar1 from "../Bars/Bar1";
import Bar2 from "../Bars/Bar2";
import './RightPanel.css'

const LeftPanel = (props) => {
    return (
        <div className="RightPanel">
            <Bar1 data={props.data}/>
            <Bar2 data={props.data}/>
        </div>
    )
}

export default LeftPanel;