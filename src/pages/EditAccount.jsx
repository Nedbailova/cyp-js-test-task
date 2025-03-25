import React, { useState } from "react";
import { useLocation, useParams, useNavigate } from "react-router-dom";
import { Button } from "../components/Button.jsx";
import { Input } from "../components/Input.jsx";
import background from "../images/background.png";
import "./styles/EditAccount.css";

const EditAccount = () => {
  const { id } = useParams();
  const location = useLocation();
  const { accountLocal } = location.state;
  const navigate = useNavigate();

  const [name, setName] = useState(accountLocal.name);
  const [balance, setBalance] = useState(accountLocal.balance);
  const [description, setDescription] = useState(accountLocal.description);
  const [errors, setErrors] = useState({
    name: null,
    balance: null,
    description: null,
  });

  const validateForm = () => {
    let valid = true;
    const newErrors = {
      name: null,
      balance: null,
      description: null,
    };

    if (!name || name.trim() === "") {
      newErrors.name = "Обязательное поле";
      valid = false;
    } else if (name.length > 23) {
      newErrors.name = "Максимум 23 символа";
      valid = false;
    }

    const balanceNum = Number(balance);
    if (isNaN(balanceNum)) {
      newErrors.balance = "Введите число";
      valid = false;
    } else if (balanceNum < 0) {
      newErrors.balance = "Должно быть положительным";
      valid = false;
    } else if (balanceNum > 1000000000) {
      newErrors.balance = "Максимум 1000000000";
      valid = false;
    }

    if (description && description.length > 35) {
      newErrors.description = "Максимум 35 символов";
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  const handleSave = () => {
    if (!validateForm()) {
      return;
    }

    try {
      const updatedAccount = { name, balance: Number(balance), description };
      localStorage.setItem(`account_${id}`, JSON.stringify(updatedAccount));
      navigate(`/AboutAccount/${id}`, { replace: true });
      window.scrollTo(0, 0);
    } catch (error) {
      console.error("Ошибка при сохранении:", error);
      alert("Не удалось сохранить изменения");
    }
  };

  return (
    <div className="edit_page">
      <img className="home_page_bg" src={background} alt="background lines" />
      <div className="container">
        <h1>Редактирование счета {id}</h1>
        <div className="form">
          <div className="input_block">
            <label className="input_block_elem">
              <p>
                <span className="required_star">* </span>Имя кошелька:
              </p>
              <Input
                placeholder="Имя..."
                value={name}
                onChange={(e) => setName(e.target.value)}
                className={errors.name ? "input_error" : ""}
              />
              {errors.name && (
                <div className="error_message">
                  <span className="error_text">{errors.name}</span>
                </div>
              )}
            </label>
            <label className="input_block_elem">
              <p>Текущий баланс:</p>
              <Input
                placeholder="Текущий баланс..."
                value={balance}
                onChange={(e) => setBalance(e.target.value)}
                type="number"
                className={errors.balance ? "input_error" : ""}
              />
              {errors.balance && (
                <div className="error_message">
                  <span className="error_text">{errors.balance}</span>
                </div>
              )}
            </label>
            <label className="input_block_elem">
              <p>Описание:</p>
              <Input
                placeholder="Описание..."
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className={errors.description ? "input_error" : ""}
              />
              {errors.description && (
                <div className="error_message">
                  <span className="error_text">{errors.description}</span>
                </div>
              )}
            </label>
            <span className="required_star">*</span> - обязательные поля
          </div>
          <Button text="Сохранить" onClick={handleSave} />
        </div>
      </div>
    </div>
  );
};

export default EditAccount;
