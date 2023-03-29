import React from "react";
import "./userCard.scss";

const UserCard = ({ item }) => {
  return (
    <div className="user-card">
      <div className="img-container">
        <img src={item.icon} alt="" />
      </div>
      <p>{item.text}</p>
      <p>{item.figure}</p>
    </div>
  );
};

export default UserCard;
