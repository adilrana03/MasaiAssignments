import { Todo } from "./Components/Todo/Todo";
import "./styles.css";
import { Nav } from "./Components/Nav/Nav";
import { Routes, Route } from "react-router-dom";
import { UserDetails } from "./Components/Details/Detail";
import { Login } from "./Components/Login/Login";
import { useSelector } from "react-redux";

export default function App() {
  const Auth = useSelector((data) => {
    return data.AuthReducer.isAuth;
  });

  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route
          path="/"
          element={
            Auth === false ? (
              <h2 style={{ marginTop: "30px" }}>Login first</h2>
            ) : (
              <Todo />
            )
          }
        />
        <Route path="/user/:index" element={<UserDetails />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}
