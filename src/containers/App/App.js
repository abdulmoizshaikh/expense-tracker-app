import React, { useState, createContext, useEffect } from "react";
import BalanceInquiry from "../../views/components/BalanceInquiry/BalanceInquiry";
import AddTransaction from "../AddTransaction/AddTransaction";
import TransactionHistory from "../../views/components/TransactionHistory/TransactionHistory";
import IncomeExpenseCard from "../../views/components/IncomeExpenseCard/IncomeExpenseCard";
import "./App.css";

export default function App(props) {
  // console.log("props in app", props);
  const [totalIncome, setTotalIncome] = useState(0);
  const [totalExpense, setTotalExpense] = useState(0);
  const [allTransactions, setAllTransaction] = useState([]);

  // useEffect(() => {
  //   let _allTransactions = JSON.parse(localStorage.getItem("allTransactions"));
  //   if (_allTransactions && _allTransactions.length > 0) {
  //     setAllTransaction(_allTransactions);
  //     let income = 0;
  //     let expense = 0;
  //     _allTransactions.map((item) => {
  //       if (item.value > 0) {
  //         income += JSON.parse(item.value);
  //       } else {
  //         expense += JSON.parse(item.value);
  //       }
  //     });
  //     setTotalIncome(income);
  //     setTotalExpense(expense);
  //   }
  //   return () => {
  //     // cleanup;
  //   };
  // }, []);

  return (
    <div id="content">
      <p id="title">Expense Tracker</p>
      <BalanceInquiry {...props} />
      <IncomeExpenseCard {...props} />
      <TransactionHistory {...props} />
      <AddTransaction {...props} />
    </div>
  );
}
