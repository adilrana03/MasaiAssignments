import "./App.css";
import LoadingIndicator from "./Component/LoadingIndicator";
import Pagination from "./Component/Pagination";
import RestaurantCard from "./Component/RestaurantCard";
import Restaurants from "./Component/Restaurants";

export default function App() {
  return <div className="App">
    <Restaurants /> 
  </div>;
}
