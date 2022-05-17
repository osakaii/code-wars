import React from "react";
import "./Grid.css";
import { USERS_DATA } from "../../consts/users";
import UserRaw from "../UserRaw/UserRaw";

function Grid(props) {
  return (
    <div className="Grid">
      <div className="grid__raw" id="header">
        <div className="grid__rawItem">Name</div>
        <div className="grid__rawItem">Username</div>
        <div className="grid__rawItem">Count</div>
        <div className="grid__rawItem">Point</div>
        <div className="grid__rawItem">Info</div>
      </div>
      {USERS_DATA.map((el, index) => {
        return <UserRaw data={el} key={el.name + el.id} startDate= {props.startDate} endDate = {props.endDate} />;
      })}
    </div>
  );
}

export default Grid;
