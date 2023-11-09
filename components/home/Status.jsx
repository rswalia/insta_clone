import React from "react";
import {obj} from "../../data/statusData";
import "../../styles/status.css";

const Status = () => {
  return (
    <div className="statusContainer">
        {
            obj.map(obj=>{
                return <div style={{display:'flex', flexDirection:'column', gap:'10px', alignItems:'center'}}>
                    <img style={{ border:'5px solid red', borderRadius:'50%' }} width='50px' height='50px' src={`${obj.profilePic}`} alt="profilePictures"/>
                    <span>{obj.username}</span>
                </div>
            })
        }
    </div>
  )
}

export default Status
