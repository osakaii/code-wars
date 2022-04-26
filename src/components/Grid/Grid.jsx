import React from "react";
import "./Grid.css";
import { USERS_DATA } from "../../consts/users";
import UserRaw from "../UserRaw/UserRaw";

function Grid(props) {
  return (
    <div className="Grid">
      <div className="grid__raw header">
        <div className="grid__rawItem">Имя</div>
        <div className="grid__rawItem">Количество</div>
        <div className="grid__rawItem">Очки</div>
      </div>
      {USERS_DATA.map((el, index) => {
        return <UserRaw data={el} key={el.name + el.id} />;
      })}
    </div>
  );
}

export default Grid;
