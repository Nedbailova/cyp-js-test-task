import React from "react";
import { Button } from "../components/Button.jsx";
import { useLocation, useParams, useNavigate } from "react-router-dom";
import "./styles/AboutAccount.css";
import background from "../images/background.png";
import { Operation } from "../components/Operation.jsx";
import { operations } from "../data/operationsData";

const AboutAccount = () => {
  const { id } = useParams();
  const location = useLocation();
  const navigate = useNavigate();

  const storedAccount = JSON.parse(localStorage.getItem(`account_${id}`));
  const accountLocal = storedAccount || location.state?.accountLocal;

  let current_operations = operations.filter(
    (operation) => operation.account_id === Number(id)
  );

  return (
    <div className="about_page">
      <img className="about_page_bg" src={background} alt="background lines" />
      <div className="container">
        <div className="card_info">
          <h1 className="account_name">
            🌟 Ваш счет: <strong>{accountLocal.name}</strong>
          </h1>
          <p className="account_balance">
            {accountLocal.balance > 0 ? (
              <>
                🎉 Поздравляем! Ваш баланс:{" "}
                <strong>{accountLocal.balance} ₽</strong>.
                {accountLocal.balance > 2000
                  ? " Вы на вершине финансового успеха! 🚀"
                  : " Вы на верном пути к финансовой стабильности!"}
              </>
            ) : (
              "Ваш счет пока пуст, но это отличный повод начать копить!"
            )}
          </p>
          <p className="account_description">
            📝 <strong>Описание:</strong> "
            {accountLocal.description ||
              "Вы пока не добавили описание, но это можно исправить!"}
            "
          </p>
        </div>
        <Button
          text="Редактировать счет"
          onClick={() => {
            navigate(`/AboutAccount/${id}/EditAccount`, {
              state: { accountLocal },
            });
            window.scrollTo(0, 0);
          }}
        />
        <h2 className="text_transaction">Транзакции:</h2>
        {current_operations.length > 0 ? (
          <div className="operations">
            {current_operations.map((operation) => (
              <Operation operation={operation} key={operation.id} />
            ))}
          </div>
        ) : (
          <p>Нет транзакций.</p>
        )}
      </div>
    </div>
  );
};

export default AboutAccount;
