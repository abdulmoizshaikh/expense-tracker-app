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
  const [allTransactions, setAllTransaction] = useState([
    {
      _id: 1,
      name: "Book",
      value: 23,
    },
  ]);

  useEffect(() => {
    localStorage.setItem(
      "allTransactions",
      JSON.stringify([
        {
          _id: 1,
          name: "Book",
          value: 23,
        },
      ])
    );
    return () => {
      // cleanup;
    };
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
