import React, { useState } from "react";
import "./AddTransaction.css";

const AddTransaction = (props) => {
  const [text, setText] = useState("");
  const [amount, setAmount] = useState("");

  // nested array destructuring with default values
  const {
    setTotalIncome,
    setTotalExpense,
    state: { allTransactions = [], totalIncome = 0, totalExpense = 0 } = {},
  } = props;

  // methods
  const onAddTransaction = () => {
    if (text && amount) {
      let transaction = {};
      // if (allTransactions && allTransactions.length > 0) {
      transaction = {
        _id: allTransactions.length > 0 ? allTransactions.length + 1 : 1,
        name: text,
        value: amount,
      };
      updateIncomeExpense();

      // action
      props.addTransaction(transaction);

      setText("");
      setAmount("");
    } else {
      alert("Fields cannot be empty");
    }
  };

  const updateIncomeExpense = () => {
    if (amount > 0) {
      setTotalIncome(totalIncome + parseFloat(amount));
    } else {
      setTotalExpense(totalExpense + parseFloat(amount));
    }
  };

  return (
    <div className="container ">
      <p className="bold">Add new transaction</p>
      <p className="hr" />

      <div>
        <p>Text</p>
        <input
          type="text"
          className="input"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      </div>

      <div>
        <div className="MV10">
          <span>Amount</span>
          <br />
          <span>(negative-expense,positive-income)</span>
        </div>

        <input
          className="input"
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
      </div>

      <button id="add-t-btn" onClick={onAddTransaction}>
        Add Transaction
      </button>
    </div>
  );
};

export default AddTransaction;
