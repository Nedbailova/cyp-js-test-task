import React from "react";
import iconAnother from "../images/icons/iconAnother.svg";
import iconGame from "../images/icons/iconGame.svg";
import iconShop from "../images/icons/iconShop.svg";
import "./styles/Operation.css";

export function Operation({ operation }) {
  const icons = {
    1: iconAnother,
    2: iconGame,
    3: iconShop,
  };

  return (
    <div className="operation_block" key={operation.id}>
      <img
        className="icon"
        src={icons[operation.category_id]}
        alt={operation.name}
      />
      <p>{operation.name}</p>
      <p>{operation.date}</p>
      <p>{operation.amount} ₽</p>
    </div>
  );
}
