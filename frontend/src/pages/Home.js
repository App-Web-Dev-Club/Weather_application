import Navbar from "../components/Navbar";
import "../App2.css";
import clouds from "./Capture.PNG";
export default function Home() {
  return (
    <>
      <Navbar />
      <div className="container-fluid">
        <h2 style={{ textAlign: "center", color: "white" }}>Home Page</h2>
        <div className="container" style={{ marginTop: "50px" }}>
          <h3 style={{ textAlign: "center" }}>Current Weather</h3>
          <nav>
            <div>
              <h4>Karunya University</h4>
              <p>Today : 10/02/2024</p>
            </div>
            <div>
              <h4>28° C</h4>
              <p>Scattered Clouds</p>
            </div>
            <div>
              <h4>🌃</h4>
            </div>
          </nav>
        </div>

        <div className="container">
          <h3 style={{ textAlign: "center" }}>Air Conditions</h3>
          <nav>
            <div>
              <h4 className="light">🌡️ Real Feel</h4>
              <p className="fs-5">29° C</p>
            </div>
            <div>
              <h4 className="light">💨 Wind</h4>
              <p className="fs-5">0.85 m/s</p>
            </div>
            <div>
              <h4 className="light">☁️ Clouds</h4>
              <p className="more fs-5">41%</p>
            </div>
            <div>
              <h4 className="light">♨️ Humidity</h4>
              <p className="fs-5">58%</p>
            </div>
          </nav>
        </div>
        <div className="container">
          <h3 style={{ textAlign: "center" }}>Weekly Forecasts</h3>
          <nav className="weekly-forecast">
            <div class="day">
              <div class="day-name">Sunday</div>
              <div class="temp-range">
                <span style={{textAlign:"center"}} class="temp-high">37°</span> 
                <span class="temp-low">28°</span>
                <p >Mostly Sunny</p>
              </div>
            </div>
            <div class="day">
              <div class="day-name">Monday</div>
              <div class="temp-range">
                <span style={{textAlign:"center"}} class="temp-high">37°</span> 
                <span class="temp-low">28°</span>
                <p >Mostly Sunny</p>
              </div>
            </div>
            <div class="day">
              <div class="day-name">Tuesday</div>
              <div class="temp-range">
                <span style={{textAlign:"center"}} class="temp-high">37°</span> 
                <span class="temp-low">28°</span>
                <p >Mostly Sunny</p>
              </div>
            </div>
            <div class="day">
              <div class="day-name">Wednesday</div>
              <div class="temp-range">
                <span style={{textAlign:"center"}} class="temp-high">37°</span> 
                <span class="temp-low">28°</span>
                <p >Mostly Sunny</p>
              </div>
            </div>
            <div class="day">
              <div class="day-name">Thursday</div>
              <div class="temp-range">
                <span style={{textAlign:"center"}} class="temp-high">37°</span> 
                <span class="temp-low">28°</span>
                <p >Mostly Sunny</p>
              </div>
            </div>
            <div class="day">
              <div class="day-name">Friday</div>
              <div class="temp-range">
                <span style={{textAlign:"center"}} class="temp-high">37°</span> 
                <span class="temp-low">28°</span>
                <p >Mostly Sunny</p>
              </div>
            </div>
            <div class="day">
              <div class="day-name">Saturday</div>
              <div class="temp-range">
                <span style={{textAlign:"center"}} class="temp-high">37°</span> 
                <span class="temp-low">28°</span>
                <p >Mostly Sunny</p>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
}
