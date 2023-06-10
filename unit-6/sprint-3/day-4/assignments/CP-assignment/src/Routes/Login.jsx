import { useState } from "react";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AppContext } from "../Context/AppContext";
import { Navigate } from "react-router-dom";

function Login() {
  const {authState , loginUser} = useContext(AppContext)
  const [user, setUser] = useState({
    email:'',
    password:''
  })
  const [disable, setDisable] = useState(false);

  const handleChange =(e) =>{
    setUser({
      ...user,
      [e.target.name]:e.target.value
    })
  }

  const handleSubmit = (e) =>{
    e.preventDefault();
    setDisable(true);
    fetch('https://reqres.in/api/login',{
      method:"POST",
      headers:{
        'content-type':'application/json'
      },
      body:JSON.stringify(user),
    })
    .then(res => res.json())
    .then((data) => loginUser(data.token));
  }
  return (
    <>
    {authState.isAuth ? (<Navigate to='/dashboard' />):(
    <div className="login-page">
      <form className="form" data-testid="login-form" onSubmit={handleSubmit} >
        <div>
          <label>
            <input data-testid="email-input" type="email" placeholder="email"
            name="email"
            onChange={handleChange} />
          </label>
        </div>
        <div>
          <label>
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
          <button data-testid="form-submit" type="submit" disabled={disable}>
            SUBMIT
          </button>
        </div>
      </form>
      <div>
        <Link className="message" to="/">
          Go Back
        </Link>
      </div>
    </div>
    )}
    </>
  );
}
export default Login;
