import React from "react";
import "./CardList.styles.css";
import { Card } from "../card/Card";

export const CardList = ({ monsters }) => {
  return (
    <div className="card-list">
      {monsters.map(monster => (
        <Card {...monster} key={monster.id} />
      ))}
    </div>
  );
};
