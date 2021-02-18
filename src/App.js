import { useState } from "react";
import BalanceInquiry from "./components/BalanceInquiry/BalanceInquiry";
import AddTransaction from "./containers/AddTransaction/AddTransaction";
import TransactionHistory from "./components/TransactionHistory/TransactionHistory";
import "./App.css";
import IncomeExpenseCard from "./components/IncomeExpenseCard/IncomeExpenseCard";

function App() {
  const [balanceAmount, setBalanceAmount] = useState(0);
  const [totalIncome, setTotalIncome] = useState(0);
  const [totalExpense, setTotalExpense] = useState(0);

  return (
    <div id="root">
      <p id="title">Expense Tracker</p>
      <BalanceInquiry balanceAmount={balanceAmount} />
      <IncomeExpenseCard
        totalIncome={totalIncome}
        totalExpense={totalExpense}
      />
      <TransactionHistory />
      <AddTransaction />
    </div>
  );
}

export default App;
