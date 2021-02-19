import { useState, createContext } from "react";
import BalanceInquiry from "./components/BalanceInquiry/BalanceInquiry";
import AddTransaction from "./containers/AddTransaction/AddTransaction";
import TransactionHistory from "./components/TransactionHistory/TransactionHistory";
import IncomeExpenseCard from "./components/IncomeExpenseCard/IncomeExpenseCard";
import "./App.css";

export const RootContext = createContext();

export default function App() {
  const [balanceAmount, setBalanceAmount] = useState(100);
  const [totalIncome, setTotalIncome] = useState(50);
  const [totalExpense, setTotalExpense] = useState(30);
  const [allTransactions, setAllTransaction] = useState([
    {
      _id: 1,
      name: "Book",
      value: 23,
    },
  ]);

  return (
    <RootContext.Provider
      value={{
        balance: [balanceAmount, setBalanceAmount],
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
