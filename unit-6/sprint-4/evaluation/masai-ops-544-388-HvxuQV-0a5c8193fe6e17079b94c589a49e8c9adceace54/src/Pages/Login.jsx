import React from "react";
import {useState} from "react";
import {getLoginData} from "../Redux/AuthReducer/action";
import { useSelector, useDispatch } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";

const Login = () => {
  const[email,setEmail]=useState("");
  const[password,setpassword]=useState("");
  const dispatch = useDispatch();
  const navigate= useNavigate();
  const location = useLocation();

  const goPage = location.state?.data || "/";
  const handleclick=(e)=>{
    e.preventDefault();
    dispatch(getLoginData({email, password})).then((k)=>{
      navigate(goPage,{replace:true});
    });
  };
  
  return (
    <div>
      <h2>LOGIN</h2>
      <form onSubmit={handleclick}>
        <div>
          <label>User Email</label>
          <br />
          <input data-testid="login-email"
          value={email}
          onChange={(el)=>{
            setEmail(el.target.value);
          }} />
        </div>
        <div>
          <label>User Password</label>
          <br />
          <input data-testid="login-password" value={password} onChange={(e)=>setpassword(e.target.value)} />
        </div>
        <button type="submit" data-testid="login-submit">
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
