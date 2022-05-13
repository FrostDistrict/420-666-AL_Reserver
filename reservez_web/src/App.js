import './App.css';
import {
    BrowserRouter as Router,
    useRoutes
} from "react-router-dom";

import ScheduleGrid from "./components/Client/Scheduling/ScheduleGrid/ScheduleGrid";
import Home from "./components/Home/Home";
import Dashboard from "./components/Shared/Dashboard/Dashboard";
import Restaurants from "./components/Client/Restaurants/Restaurants";
import RestaurantPage from "./components/Client/RestaurantPage/RestaurantPage";
import MyRestaurants from "./components/Client/MyRestaurants/MyRestaurants";
import MyReservations from "./components/Client/MyReservations/MesReservations";


function App() {
    const App = () => useRoutes([
        { path: "/", element: <Home/> },
        { path: "/Login", element: <Home/> },
        { path: "/scheduling", element: <ScheduleGrid/> },
        { path: "/dashboard", element: <Dashboard/> },
        { path: "/restaurants", element: <Restaurants/>},
        { path: "/restaurantPage", element: <RestaurantPage/>},
        { path: "/myRestaurants", element: <MyRestaurants/>},
        { path: "/myReservations", element: <MyReservations/>},
    ]);

  return (
    <div className="App">
        <Router>
            <App/>
        </Router>
    </div>
  );
}

export default App;
