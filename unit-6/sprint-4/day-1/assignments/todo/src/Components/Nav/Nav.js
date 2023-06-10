import React from "react";
import "./Nav.css";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { AuthAction } from "../Reduc-Store/Action";

export const Nav = () => {
  const dispatch = useDispatch();

  const Auth = useSelector((data) => {
    return data.AuthReducer.isAuth;
  });

  const handleAuth = () => {
    AuthAction(false, dispatch);
  };

  return (
    <div className="nav">
      <Link to="/">TODO LIST</Link>
      {Auth === false ? (
        <Link to="/login">Login</Link>
      ) : (
        <div style={{ color: "white" }} onClick={handleAuth}>
          Logout
        </div>
      )}
    </div>
  );
};
