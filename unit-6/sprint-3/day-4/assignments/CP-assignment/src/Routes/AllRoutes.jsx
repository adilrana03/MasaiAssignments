import {Route,Routes} from "react-router-dom";
import Home from "./Home";
import Login from "./Login";
import Dashboard from "./Dashboard";
import RestaurantPage from "./RestaurantPage";
import PrivateRoute from "../Components/PrivateRoute";
function AllRoutes() {
  return <div>{/* Add Home, Login dashboard and restaurant pages */}
      <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/login" element={<Login/>}></Route>
          <Route path="/dashboard" element={
          <PrivateRoute>
            <Dashboard/>
          </PrivateRoute>}></Route>
          <Route path="/restaurants/:id" element={
          <PrivateRoute>
            <RestaurantPage />
          </PrivateRoute>}></Route>
      </Routes>
  </div>;
}

export default AllRoutes;
