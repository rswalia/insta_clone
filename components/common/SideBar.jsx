import React from "react";
import "../../styles/sidebar.css"

const SideBar = () => {
  return (
    <div className="sidebarContainer">
        <ul>
            <li style={{marginBottom:'20px'}}><img width={'120px'} src="https://www.edigitalagency.com.au/wp-content/uploads/instagram-logo-white-text-black-background.png" alt="Instagram writing logo" /></li>
            <li>Home</li>
            <li>Search</li>
            <li>Explore</li>
            <li>Reels</li>
            <li>Messages</li>
            <li>Notifications</li>
            <li>Create</li>
            <li>Profile</li>
        </ul>
    </div>
  );
}

export default SideBar;
