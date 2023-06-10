import { useState } from "react";
import Header from "./Component/Header.js";
import Profile from "./Component/State_API/Profile";
import Counter from "./Component/Counter/Counter";
import Products from "./Component/Products/Product";
import Auth from "./Component/Auth.js";
import Electronic from "./Component/Products/Electronic";
import Jewelery from "./Component/Products/Jewelery";
import { Routes, Route, Navigate } from "react-router-dom";
import { loginContext } from "./Component/Context/context";
import ProtectedRoute from "./Component/ProtectRoute/ProtectedRoute.js";
function App() {
  const [state, setState] = useState({
    isLoggedIn: false,
    user: "Guest User",
  });

  const fnLoggedIn = (data) => {
    setState(data);
  };

  const fnLoggedOut = () => {
    setState({
      isLoggedIn: false,
      user: "Guest User",
    });
  };

  return (
    <div>
      <loginContext.Provider value={{ state, fnLoggedIn, fnLoggedOut }}>
        <Header />
        {/* <Auth /> */}
        <Routes>
          <Route path="/" element={<Auth />} />
          <Route
            path="/profile"
            element={state.isLoggedIn ? <Profile /> : <Navigate to="/" />}
          />
          <Route
            path="/products"
            element={state.isLoggedIn ? <Products /> : <Navigate to="/" />}
          >
            <Route path="" element={<Navigate to="electronic" />} />
            <Route path="electronic" element={<Electronic />} />
            <Route path="jewelery" element={<Jewelery />} />
          </Route>
          <Route
            path="/counter"
            element={
              <ProtectedRoute>
                <Counter />
              </ProtectedRoute>
            }
          />
        </Routes>
      </loginContext.Provider>
      {/* <Login />
      <Home /> */}
      {/* <div style={{ padding: "50px 100px" }}>
        <A />
      </div> */}
    </div>
  );
}

export default App;
