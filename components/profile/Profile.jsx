import React from "react";
import SideBar from "../common/SideBar";
import Header from "./Header";
import {myInfo} from "../../data/myinfo";

const Profile = () => {
  return (
    <div style={{display:'flex', gap:'5vw'}}>
        <SideBar/>
        <Header myInfo={myInfo}/>
    </div>
  );
}

export default Profile;
