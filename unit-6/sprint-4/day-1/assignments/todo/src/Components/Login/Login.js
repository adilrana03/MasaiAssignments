import React, { useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { AuthAction } from "../Reduc-Store/Action";
import "./Login.css";

export const Login = () => {
  const [token, setToken] = useState("");
  const navigate = useNavigate();
  const emailRef = useRef();
  const passRef = useRef();
  const dispatch = useDispatch();

  useEffect(() => {
    if (token === "QpwL5tke4Pnpja7X4") {
      AuthAction(true, dispatch);
      navigate("/");
    }
  }, [token]);

  const handleLogin = () => {
    var obj = {
      email: emailRef.current.value,
      password: passRef.current.value
    };

    fetch("https://reqres.in/api/login", {
      method: "POST",
      body: JSON.stringify(obj),
      headers: {
        "Content-type": "application/json"
      }
    })
      .then((res) => res.json())
      .then((data) => {
        setToken(data.token);
        // console.log(data.token);
      });
  };

  return (
    <div>
      <div className="login">
        <h2>Login </h2>
        <input type="text" placeholder="Enter your email" ref={emailRef} />
        <input
          type="password"
          placeholder="Enter your password"
          ref={passRef}
        />
        <button onClick={handleLogin}>Login</button>
      </div>
      <div style={{ marginTop: "30px" }}>
        <p>Email = "eve.holt@reqres.in"</p>
        <p>Pass = "city"</p>
      </div>
    </div>
  );
};
