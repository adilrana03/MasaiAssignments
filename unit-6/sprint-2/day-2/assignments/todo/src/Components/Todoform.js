import { useState, useEffect } from "react";
import Tasklist from "./Tasklist";

function TodoForm() {
  const [data, setData] = useState([]);
  const [load, setLoad] = useState(false);

  useEffect(() => {
    const fetchTodo = async () => {
      setLoad(true);
      const res = await fetch("http://localhost:3000/todos");
      setData(res.data);
      setLoad(false);
    };
    fetchTodo();
  }, []);


  const addTodo = () => {
        console.log('btn-working');
    let payload = {
      title: document.querySelector("input").value,
      status: false,
    };
    fetch("http://localhost:3000/todos", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(payload),
    });
  };
  return (
    <>
      <div style={{ backgroundColor: "teal", padding: "30px" }}>
        <h2 style={{ fontSize: "2.2rem", color: "#fff" }}>Todo App</h2>
      </div>
      <div className="form">
        <input type="text" placeholder="Enter your task"></input>
        <br></br>
        <button onClick={addTodo}>Add Task</button>
      </div>
    </>
  );
}
export default TodoForm;