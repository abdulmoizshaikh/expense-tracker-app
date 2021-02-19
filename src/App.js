import { useState, createContext, useEffect } from "react";
import BalanceInquiry from "./components/BalanceInquiry/BalanceInquiry";
import AddTransaction from "./containers/AddTransaction/AddTransaction";
import TransactionHistory from "./components/TransactionHistory/TransactionHistory";
import IncomeExpenseCard from "./components/IncomeExpenseCard/IncomeExpenseCard";
import "./App.css";

export const RootContext = createContext();

export default function App() {
  const [totalIncome, setTotalIncome] = useState(0);
  const [totalExpense, setTotalExpense] = useState(0);
  const [allTransactions, setAllTransaction] = useState([]);

  useEffect(() => {
    let _allTransactions = JSON.parse(localStorage.getItem("allTransactions"));
    if (_allTransactions && _allTransactions.length > 0) {
      console.log("_allTransactions", _allTransactions);
      setAllTransaction(_allTransactions);
      let income = 0;
      let expense = 0;
      _allTransactions.map((item) => {
        if (item.value > 0) {
          income += JSON.parse(item.value);
        } else {
          expense += JSON.parse(item.value);
        }
      });
      console.log("income,expense", income, expense);
      setTotalIncome(income);
      setTotalExpense(expense);
    }
    return () => {
      // cleanup;
    };
    // }, []);
  }, []);

  return (
    <RootContext.Provider
      value={{
        income: [totalIncome, setTotalIncome],
        expense: [totalExpense, setTotalExpense],
        transaction: [allTransactions, setAllTransaction],
      }}
    >
      <div id="content">
        <p id="title">Expense Tracker</p>
        <BalanceInquiry />
        <IncomeExpenseCard />
        <TransactionHistory />
        <AddTransaction />
      </div>
    </RootContext.Provider>
  );
}
