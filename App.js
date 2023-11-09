import React from "react";
import Login from "./components/Login";
import Register from "./components/Register";
import Home from "./components/home/Home";
import SideBar from "./components/common/SideBar";
import Profile from "./components/profile/Profile";
import './styles/app.css'

function App() {
  return (
    <div className="App">
      {/* <div className="login">
        <Login/>
      </div> */}
      {/* <Register/> */}
      {/* <Home/> */}
      {/* <SideBar/> */}
      <Profile/>
    </div>
  );
}

export default App;
