import React from "react";
import "./Updates.css";
import { UpdatesData } from "../../Data/Data";

const Updates = () => {
  return (
    <div className="Updates">
      {UpdatesData.map((update) => {
        return (
          <div className="update">
            <img src={update.img} alt="profile" />
            <div className="noti">
              <div  style={{marginBottom: '1rem'}}>
                <span className="spam">{update.credits}</span>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Updates;
