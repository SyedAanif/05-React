import React from "react";
import "./UserCard.css"

const UserCard = (props) => {
  return (
    <div className="user-container" style={props.style}>
      <p id="user-title">{props.name}</p>
      <img id="user-img" src={props.imgSrc} alt={props.name}></img>
      <p id="user-desc">{props.desc}</p>
    </div>
  );
};

export default UserCard;
