import React from "react";
import Icon from "../../components/Icon/Icon";
import css from "../Expenses/ExpensesIncomes.module.css";
import Balance from "../../components/Balance/MainBalance";
import Navigation from "../../................";
import ProductForm from "../../................";
import TransactionsList from "../../components/MainPage/TransactionsList/TransactionsList";
import MobileForm from "../../components/MainPage/MobileForm/MobileForm";
import Background from "../../................";
import Summary from "../../................";

import { useSelector } from "react-redux";
import { selectIncomeTransactions } from "../../redux/transactions/selectors";

export const Incomes = ({ isAddTransModalOpen, setIsAddTransModalOpen }) => {
  const transactionsList = useSelector(selectIncomeTransactions);

  const handleShowModal = () => {
    setIsAddTransModalOpen(true);
    const dialog = document.getElementById("mobileModal");
    dialog.showModal();
    document.body.style.position = "fixed";
  };

  return (
    <div className={css.container}>
      <Background />
      <button
        type="button"
        className={css.btnWrapper}
        onClick={handleShowModal}
      >
        <Icon className={css.btnIcon} iconName="arrow_left" />
        <span className={css.btnText}>ADD TRANSACTION</span>
      </button>
      <Balance />
      <Navigation transactionType="income" />

      <div className={css.transactionsWindow}>
        <div className={css.formDesktop}>
          <ProductForm
            transactionType="income"
            isAddTransModalOpen={isAddTransModalOpen}
          />
        </div>
        <div className={css.mobileForm}>
          <MobileForm
            transactionType="income"
            isAddTransModalOpen={isAddTransModalOpen}
            setIsAddTransModalOpen={setIsAddTransModalOpen}
          />
        </div>
        <div className={css.desktopView}>
          <TransactionsList
            transactionsList={transactionsList}
            transactionType="income"
          />
          <div className={css.desktop}>
            <Summary reportType="income" />
          </div>
        </div>
      </div>
      <div className={css.tablet}>
        <Summary reportType="income" />
      </div>
    </div>
  );
};
export default Incomes;