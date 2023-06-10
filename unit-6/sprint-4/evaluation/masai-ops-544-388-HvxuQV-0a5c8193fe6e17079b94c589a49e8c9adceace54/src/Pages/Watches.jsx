import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { ElementFlags } from "typescript";
import Filter from "../Components/Filter";
import WatchCard from "../Components/WatchCard";
import { WatchDataAction } from "../Redux/AppReducer/action";

const Watches = () => {
  const dispatch = useDispatch();
  const watchesData = useSelector((storeData)=>{
    return storeData.AppReducer.watches
  })

  useEffect(()=>{
    fetchData();
  },[])








  const fetchData = ()=>{
    fetch("http://localhost:8080/watches").then(response=>response.json())
    .then((data)=>{
      WatchDataAction(data,dispatch);
    })
  }

  return (
    <div style={{display:"flex"}}>
      <Filter />
      <div style={{display:"grid",
      gridTemplateColumns:"repeat(3,1fr)",
      gap:"30px",
      width:"90%",
      margin:"25px auto"}}>
        {/* Map through the watch list here using WatchCard Component */}
        {
          watchesData.map((e)=>{
            return <Link to={`/watches/${e.id}`} key={e.id}><WatchCard  id={e.id} name={e.name} category={e.category} image={e.image}/></Link>
          })
        }
      </div>
    </div>
  );
};

export default Watches;