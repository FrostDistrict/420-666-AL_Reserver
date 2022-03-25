import './App.css';
import {
    BrowserRouter as Router,
    Route,
    Routes
} from "react-router-dom";

import ScheduleGrid from "./components/Client/Scheduling/ScheduleGrid/ScheduleGrid";
import Home from "./components/Home/Home";


function App() {
  return (
    <div className="App">
        <Router>
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/scheduling" element={<ScheduleGrid/>} />
            </Routes>
        </Router>
    </div>
  );
}

export default App;
