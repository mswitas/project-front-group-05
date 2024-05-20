import React from "react";
import Icon from "../../components/Icon/Icon";
import css from "../Expenses/ExpensesIncomes.module.css";
import Balance from "../../components/Balance/MainBalance/Balance";
import Navigation from "../../components/Navigation/Navigation";
import ProductForm from "../../components/ProductForm/ProductForm";
import TransactionsList from "../../components/TransactionsList/TransactionsList";
import MobileForm from "../../components/MobileForm/MobileForm";
import Background from "../../components/Background/Backdround";
import Summary from "../../components/Summary/Summary";

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchExpenses,
  fetchIncome,
} from "../../redux/transactions/operations";
import { selectExpensesTransactions } from "../../redux/transactions/selectors";

export const ExpensesIncomes = ({ isAddTransModalOpen, setIsAddTransModalOpen }) => {
  const dispatch = useDispatch();
  const transactionsList = useSelector(selectExpensesTransactions);

  useEffect(() => {
    dispatch(fetchExpenses());
    dispatch(fetchIncome());
  }, [dispatch]);

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
      <Navigation transactionType="expenses" />

      <div className={css.transactionsWindow}>
        <div className={css.formDesktop}>
          <ProductForm
            transactionType="expenses"
            isAddTransModalOpen={isAddTransModalOpen}
          />
        </div>
        <div className={css.mobileForm}>
          <MobileForm
            transactionType="expenses"
            isAddTransModalOpen={isAddTransModalOpen}
            setIsAddTransModalOpen={setIsAddTransModalOpen}
          />
        </div>
        <div className={css.desktopView}>
          <TransactionsList
            transactionsList={transactionsList}
            transactionType="expenses"
          />
          <div className={css.desktop}>
            <Summary reportType="expenses" />
          </div>
        </div>
      </div>
      <div className={css.tablet}>
        <Summary reportType="expenses" />
      </div>
    </div>
  );
};

export default ExpensesIncomes;