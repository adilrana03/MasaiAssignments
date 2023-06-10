import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { Form, useParams } from "react-router-dom";
import "./Details.css" 

export const UserDetails = () => {
  const { index } = useParams();
  const [userData, setUserData] = useState({});
  const data = useSelector((sdata) => {
    return sdata.MyReducer.users;
  });

  useEffect(() => {
    setUserData(data[index]);
  }, []);

  return (
    <div>
      {Object.keys(userData).length > 0 ? (
        <div style={{ marginTop: "30px" }}>
          <h1>{userData.name}</h1>
          <h3>{userData.email}</h3>
          <img src={userData.image} width="300px" height="300px" alt={index} />
        </div>
      ) : (
        <h1>Loading....</h1>
      )}
    </div>
  );
};
