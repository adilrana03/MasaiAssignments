import "./Counter.css";
import { useState } from "react";

function Counter(props) {
  //creating the state variable
  let [state, setState] = useState(0);
  console.log("Component is Called");

  //   var count = 0;

  const updateCount = () => {
    // console.log(count); // 0
    // count = count + 1;
    // console.log(count); // 1
    // setState(state + 2);
    // setState(state + 3);
    // setState(state + 1);
    setState((prevState) => prevState + 1);
    setState((prevState) => prevState + 2);
    setState((prevState) => prevState + 3);
  };

  return (
    <div className="counter">
      <h2>Count Value is {state}</h2>
      <button onClick={updateCount}>Update Count</button>
    </div>
  );
}

export default Counter;
