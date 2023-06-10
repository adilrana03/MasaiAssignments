import React, { useRef } from "react";
import { Link } from "react-router-dom";
import "./Todo.css";
import { useDispatch, useSelector } from "react-redux";
import { DeleteAction, MyAction } from "../Reduc-Store/Action";

export const Todo = () => {
  const InputName = useRef(null);
  const InputEmail = useRef(null);
  const InputImg = useRef(null);
  const dispatch = useDispatch();
  const data = useSelector((data) => {
    return data.MyReducer.users;
  });
  // console.log(data);

  const post = () => {
    var obj = {
      email: InputEmail.current.value,
      name: InputName.current.value,
      image: InputImg.current.value
    };
    MyAction(obj, dispatch);
  };

  const handleDelete = (index) => {
    DeleteAction(data, index, dispatch);
  };

  return (
    <div>
      <div className="form">
        <h2>Add Todo</h2>
        <input type="text" placeholder="Enter your name" ref={InputName} />
        <input type="text" placeholder="Enter your email" ref={InputEmail} />
        <input type="text" placeholder="Enter your image url" ref={InputImg} />
        <button style={{ width: "60px" }} onClick={post}>
          Send
        </button>
      </div>

      <div style={{ marginTop: "30px" }}>
        <h1>Todo List</h1>
        {data.length > 0 ? (
          <div className="list">
            <table>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Details</th>
                  <th>Delete</th>
                </tr>
              </thead>
              <tbody>
                {data.map((el, index) => {
                  return (
                    <tr key={index + 1}>
                      <td>{el.name}</td>
                      <td>
                        <Link to={`/user/${index}`}>Detail</Link>
                      </td>
                      <td>
                        <button onClick={() => handleDelete(index)}>
                          Delete
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        ) : (
          <h1 style={{ marginTop: "50px" }}>No Data Found</h1>
        )}
      </div>
    </div>
  );
};
