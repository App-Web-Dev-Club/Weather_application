import React, { useState } from "react";
import { motion,AnimateSharedLayout } from "framer-motion";
import { UilTimes } from "@iconscout/react-unicons";
import Chart from "react-apexcharts";
import axios from "axios";
import dateFormat from "dateformat";

const Chart5 = () => {
    const [expanded, setExpanded] = useState(false)
    return (
        <AnimateSharedLayout>
            {
                expanded? <ExpandedCard5 setExpanded={()=>setExpanded(false)}/> : <CompactCard5 setExpanded={()=>setExpanded(true)}/>
            }
        </AnimateSharedLayout>
    )
}

function CompactCard5 ({setExpanded}) {

    return (
        <motion.div className="Chart"
        style={{
            background: "linear-gradient(180deg, #323232 0%, #4a4a4b 100%)",
        }}
        layoutId='expandableCard'
        onClick={setExpanded}
        >
            <span>Atmospheric Pressure</span>
        </motion.div>
    )
}

function ExpandedCard5 ({setExpanded}) {

  const [category, setCategory] = useState({});
  const [Data, setData] = useState({});
  let timearr = [];
  let Pressure = [];

  const last24hr = () => {
    axios
  .get("http://localhost:4321/day/")
  .then(res => {
    console.log(res);
    for(const dataObj of res.data){
      timearr.push(dataObj.time)
      Pressure.push(Math.round(dataObj.ap_mb*100)/100)
    }
    setCategory(timearr);
    setData(Pressure);
  })
  .catch(err => {
    console.log(err);
  });

  console.log(timearr, Pressure);
  }

  const lastmonth = () => {
    axios
  .get("http://localhost:4321/month/")
  .then(res => {
    console.log(res);
    for(const dataObj of res.data){
      timearr.push(dateFormat(dataObj.date, "d mmmm"))
      Pressure.push(Math.round(dataObj.ap_mb*100)/100)
    }
    setCategory(timearr);
    setData(Pressure);
  })
  .catch(err => {
    console.log(err);
  });

  console.log(timearr, Pressure);
  }

  const lastyear = () => {
    axios
  .get("http://localhost:4321/year/")
  .then(res => {
    console.log(res);
    for(const dataObj of res.data){
      timearr.push(dateFormat(dataObj.date, "mmmm yyyy"))
      Pressure.push(Math.round(dataObj.ap_mb*100)/100)
    }
    setCategory(timearr);
    setData(Pressure);
  })
  .catch(err => {
    console.log(err);
  });

  console.log(timearr, Pressure);
  }

    const data = {
        options: {
          chart: {
            type: "area",
            height: "auto",
          },
          animations:   {
            enabled: false,
          },
    
          dropShadow: {
            enabled: false,
            enabledOnSeries: undefined,
            top: 0,
            left: 0,
            blur: 3,
            color: "#000",
            opacity: 0.35,
          },
    
          fill: {
            colors: ["grey"],
            type: "gradient",
          },
          dataLabels: {
            enabled: false,
          },
          stroke: {
            curve: "smooth",
            colors: ["white"],
          },
          tooltip: {
            x: {
              format: "dd/MM/yy HH:mm",
            },
          },
          grid: {
            show: true,
          },
          xaxis: {
            type: "time",
            categories: category,
          },
        },
      };

    return (
        <motion.div className="Expand"
        style={{
            background: "linear-gradient(180deg, #fff 0%, #B2B2B2 100%)",
        }}
        layoutId='expandableCard'
        >
            <div
            style={{alignSelf: 'flex-end', cursor: 'pointer'}}
            >
                <UilTimes onClick={setExpanded} />
            </div>
            <div className="middleContainer">
              <div className="opt">
              <button style={{ backgroundColor:'grey' }} className ='btn' onClick={last24hr}>
                <span>Last 24 hours</span>
              </button>
              <button style={{ backgroundColor:'grey' }} className ='btn' onClick={lastmonth}>
                <span>Last Month</span>
              </button>
              <button style={{ backgroundColor:'grey' }} className ='btn' onClick={lastyear}>
                <span>Last Year</span>
              </button>
              </div>
            <div className="chartContainer">
                <Chart 
                    series={[{
                        name: "Atmospheric Pressure",
                        data: Data,
                    }]} 
                    type='area' 
                    options={data.options}
                />
            </div>
            </div>
            <span>Atmospheric Pressure</span>
        </motion.div>
    )
}

export default Chart5;