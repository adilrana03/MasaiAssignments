import { useState, useEffect } from "react";

function Timer() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prevCount) => prevCount + 1);
    }, 1000);
    return () => {
      clearInterval(interval);
    };
  }, [count]);
  
  return (
    <div style={{backgroundColor:"green",padding:"20px",color:"white",margin:"auto",fontSize:"25px"}}>
      <h1>{count}</h1>
      {/* <button onClick={() =>{
      interval = setInterval(() =>{setCount((prevCount)=>prevCount+1)
      },3000);
      
    }}>Start</button>
    <button onClick={()=>{
       clearInterval(interval);
    }}>Stop</button> */}
    </div>
  );
}
export default Timer;