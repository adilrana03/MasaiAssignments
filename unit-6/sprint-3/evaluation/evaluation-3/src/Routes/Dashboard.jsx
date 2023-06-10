import { useEffect } from "react";
import { useState } from "react";
import { useContext } from "react";
import ProductsTable from "../Components/ProductsTable";
import {AuthContext} from "../Context/AuthContext";
import Loader from "../Components/Loader";

function Dashboard() {
  const {logoutUser,authState} = useContext(AuthContext);
  const [data,setData] = useState([]);

  useEffect(()=>{
    fetchData();
  },[])

  const fetchData = ()=>{
  fetch(`https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-tech-products`).then(res=>res.json())
  .then(data=>{
    setData(data.data);
  })
  }

  return (
    <div>
      <h3>Dashboard</h3>
      <div>
        <button data-testid="logout-btn" onClick={logoutUser}>Logout</button>
        <p>
          Token:
          <b data-testid="user-token">{authState.token}</b>
        </p>
      </div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        {/* Products table */}
        <ProductsTable data={data} />
        {/* {
          data.length > 0 ? <ProductsTable data={data}/> : <Loader />
        } */}
      </div>
    </div>
  );
}

export default Dashboard;