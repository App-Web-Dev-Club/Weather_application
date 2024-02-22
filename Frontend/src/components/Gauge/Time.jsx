import React from "react";
import dateFormat from "dateformat";
import './time.css'
       
const Time = (props) => {
    const DATE= dateFormat(props.data.date, "d mmmm yyyy");
    var timeString=props.data.time;
    var H = +timeString.substr(0, 2);
var h = H % 12 || 12;
var ampm = (H < 12 || H === 24) ? " AM" : " PM";
timeString = h + timeString.substr(2, 3) + ampm;
  return (
    <>
    <div class="container">
      <h1 className="title">{DATE} {timeString}</h1>
      </div>
    </>
  );
};

export default Time;

