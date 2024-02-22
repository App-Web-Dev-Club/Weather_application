import './App.css'
import Sidebar from './components/Sidebar/Sidebar';
import Home from './pages/home';
import Predict from './pages/Predict';
import Kids from './pages/Kids';
import Map from './pages/Map';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Past from './pages/Past';

function App() {
  console.log("******")
  return (
    <div className="App">
      <div className="AppGlass">
        <Router>
          <Sidebar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/past" element={<Past/>} />
            <Route path="/predict" element={<Predict />} />
            <Route path="/kids" element={<Kids />} />
            <Route path="/map" element={<Map />} />
          </Routes>
        </Router>
      </div>
    </div>
  );
}

export default App;
