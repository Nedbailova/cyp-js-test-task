import React from "react";
import "./styles/Home.css";
import background from "../images/background.png";
import { Card } from "../components/Card.jsx";
import { accounts } from "../data/accountsData";

const Home = () => {
  const getLocalStorageData = (id) => {
    const storedData = localStorage.getItem(`account_${id}`);
    return storedData ? JSON.parse(storedData) : null;
  };

  const getAccountData = (account) => {
    const storedData = getLocalStorageData(account.id);
    return storedData ? { ...account, ...storedData } : account;
  };

  return (
    <div className="home_page">
      <img className="home_page_bg" src={background} alt="background lines" />
      <div className="container">
        <h1 className="text_all_account">Все ваши счета:</h1>
        <div className="accounts_block">
          <Card isCreateCard={true} />
          {accounts.map((account) => {
            const accountLocal = getAccountData(account);
            return <Card key={accountLocal.id} account={accountLocal} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Home;
