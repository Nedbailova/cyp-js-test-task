import React from "react";
import { useNavigate } from "react-router-dom";
import cardImage from "../images/card.png";
import newCardImage from "../images/newCard.png";
import "./styles/Card.css";

export function Card({ account, isCreateCard = false }) {
  const navigate = useNavigate();

  const handleCreateCardClick = () => {
    alert("Извините! Функционал создания нового счета в разработке.");
  };

  if (isCreateCard) {
    return (
      <div className="account_create_block">
        <div className="inside_account_block" onClick={handleCreateCardClick}>
          <img
            className="create_card_button"
            src={newCardImage}
            alt="NewCard"
          />
          <div className="text">
            <h2>
              Create <br /> New Account
            </h2>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div
      className="account_card"
      key={account.id}
      onClick={() => {
        navigate(`/AboutAccount/${account.id}`, {
          state: { accountLocal: account },
        });
        window.scrollTo(0, 0);
      }}
    >
      <div className="inside_account_block">
        <img className="account" src={cardImage} alt="Account card" />
        <div className="text">
          <h2>{account.name}</h2>
          <h2>{account.balance} ₽</h2>
          <p>{account.description}</p>
        </div>
      </div>
    </div>
  );
}
