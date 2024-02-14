import React, { useEffect, useState } from 'react';
import Navbar from "../components/Navbar"; // Adjust import path as necessary
import "../App2.css"; // Ensure this CSS file exists for styling
// eslint-disable-next-line
import clouds from "./Capture.PNG";
import axios from "axios";

export default function Home() {
  const [weatherData, setWeatherData] = useState(null);

  useEffect(() => {
    const fetchWeatherData = async () => {
      try {
        const response = await axios.get("http://192.168.2.176:8080/weather/latest-weather/");
        setWeatherData(response.data);
      } catch (error) {
        console.error("Error fetching weather data:", error);
      }
    };

    const interval = setInterval(fetchWeatherData, 20000); // Fetch data every 20 seconds
    fetchWeatherData(); // Initial fetch

    return () => clearInterval(interval); // Cleanup on component unmount
  }, []);

  const formatDate = (datetime) => {
    const date = new Date(datetime);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${day}-${month}-${year}`;
  };

  return (
    <>
      <Navbar />
      <div className="container-fluid">
        <div style={{padding:"15px"}}></div>
        <h2 style={{ textAlign: "center", color: "white"}}>Home Page</h2>
        {weatherData ? (
          <>
            <div className="container" style={{ marginTop: "30px" }}>
              <h3 style={{ textAlign: "center" }}>Current Weather</h3>
              <nav style={{marginTop:"20px"}}>
                <div>
                  <h4>Karunya University</h4>
                  <p>Today : {formatDate(weatherData.datetime)}</p>
                </div>
                <div>
                  <h4>{weatherData.temperature}° C</h4>
                  <p>{weatherData.type}</p> {/* Assuming weatherCondition exists in your data */}
                </div>
                <div>
                <h4 className="light">☀️ Solar Radiation</h4>
                  <p className="fs-5"> {weatherData.rainfall !== null ? `${weatherData.solar_radiation} mm` : "Null"}</p> {/* Assuming realFeel exists in your data */}
              
               
                </div>
              </nav>
            </div>

            <div className="container">
              <h3 style={{ textAlign: "center" }}>Air Conditions</h3>
              <nav>
                <div>
                <h4 className='light'>🧭 Wind Direction</h4>
                  <p className='fs-5'>{weatherData.wind_direction} °</p>
                   </div>
                <div>
                  <h4 className="light">💨 Wind Speed</h4>
                  <p className="fs-5">{weatherData.wind_speed} m/s</p> {/* Assuming windSpeed exists in your data */}
                </div>
                <div>
                  <h4 className="light">🌧️  Rainfall</h4>
                  <p className="more fs-5">  {weatherData.rainfall !== null ? `${weatherData.rainfall} mm` : "No rain"}</p> {/* Assuming clouds exists in your data */}
                </div>
                <div>
                  <h4 className="light">♨️ Humidity</h4>
                  <p className="fs-5">{weatherData.humidity}%</p>
                </div>
              </nav>
            </div>

            <div className="container">
              <h3 style={{ textAlign: "center" }}>Weekly Forecasts</h3>
              <nav className="weekly-forecast">
                {/* Example of a day - You should map through your data if you have multiple days */}
                <div className="day">
                  <div className="day-name">Sunday</div>
                  <div className="temp-range">
                    <span className="temp-high">37°</span>
                    <span className="temp-low">28°</span>
                    <p>Mostly Sunny</p>
                  </div>
                </div>
                <div className="day">
                  <div className="day-name">Sunday</div>
                  <div className="temp-range">
                    <span className="temp-high">37°</span>
                    <span className="temp-low">28°</span>
                    <p>Mostly Sunny</p>
                  </div>
                </div>
                <div className="day">
                  <div className="day-name">Sunday</div>
                  <div className="temp-range">
                    <span className="temp-high">37°</span>
                    <span className="temp-low">28°</span>
                    <p>Mostly Sunny</p>
                  </div>
                </div>
                <div className="day">
                  <div className="day-name">Sunday</div>
                  <div className="temp-range">
                    <span className="temp-high">37°</span>
                    <span className="temp-low">28°</span>
                    <p>Mostly Sunny</p>
                  </div>
                </div>
                <div className="day">
                  <div className="day-name">Sunday</div>
                  <div className="temp-range">
                    <span className="temp-high">37°</span>
                    <span className="temp-low">28°</span>
                    <p>Mostly Sunny</p>
                  </div>
                </div>
                <div className="day">
                  <div className="day-name">Sunday</div>
                  <div className="temp-range">
                    <span className="temp-high">37°</span>
                    <span className="temp-low">28°</span>
                    <p>Mostly Sunny</p>
                  </div>
                </div>
                <div className="day">
                  <div className="day-name">Sunday</div>
                  <div className="temp-range">
                    <span className="temp-high">37°</span>
                    <span className="temp-low">28°</span>
                    <p>Mostly Sunny</p>
                  </div>
                </div>
                {/* Repeat for other days */}
              </nav>
            </div>
          </>
        ) : (
          <p>Loading weather data...</p>
        )}
      </div>
    </>
  );
}
