import { useState, useEffect } from "react";

function Timer() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    const interval = setTimeout(() => {
      setCount((prevCount) => prevCount + 1);
    }, 1000);
    return () => {
      clearInterval(interval);
    };
  }, [count]);
  
  return (
    <div style={{backgroundColor:"green",padding:"20px",color:"white",margin:"auto",fontSize:"25px"}}>
      <h1>{count}</h1>
    </div>
  );
}
export default Timer;