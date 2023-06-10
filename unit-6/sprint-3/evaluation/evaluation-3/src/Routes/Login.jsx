import { useContext } from "react";
import { useState } from "react";
import { AuthContext } from "../Context/AuthContext";
import {useNavigate,Link} from "react-router-dom";

function Login() {
  const [inputData,setInputData] = useState({
    email : "",
    password : "",
  })
  const {loginUser} = useContext(AuthContext);
  const navigate = useNavigate();

  const handleChange = (e)=>{
    e.preventDefault();
    setInputData({
      ...inputData,
      [e.target.name] : e.target.value
    })
  }

  const handleSubmit = (e)=>{
    e.preventDefault();
     fetch("https://reqres.in/api/login",{
      method : "POST",
      headers : {
        "Content-Type" : "application/json"
      },
      body : JSON.stringify(inputData)
     })
     .then(res=>res.json())
     .then((data)=>{
            loginUser(data.token);
             navigate("/dashboard") 
     })
  }

  return (
    <div>
      <form data-testid="login-form" onSubmit={handleSubmit}>
        <div>
          <label>
            Email
            <input data-testid="email-input" type="email" placeholder="email" name="email" onChange={handleChange} />
          </label>
        </div>
        <div>
          <label>
            Password
            <input
              data-testid="password-input"
              type="password"
              placeholder="password"
              name="password" 
              onChange={handleChange}
            />
          </label>
        </div>
        <div>
          <input data-testid="form-submit" type="submit" value="SUBMIT" />
        </div>
      </form>
      <div>
        <Link to="/">Go Back</Link>
      </div>
    </div>
  );
}
export default Login;