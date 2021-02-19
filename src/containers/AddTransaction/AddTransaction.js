import React, { useContext, useState } from "react";
import { RootContext } from "../../App";
import "./AddTransaction.css";

const AddTransaction = () => {
  const [text, setText] = useState("");
  const [amount, setAmount] = useState("");
  const state = useContext(RootContext);
  // nested array destructuring with default values
  const {
    transaction: [allTransactions = [], setAllTransaction = {}],
    income: [totalIncome, setTotalIncome],
    expense: [totalExpense, setTotalExpense],
  } = state;

  // methods
  const onAddTransaction = () => {
    let transaction = {};
    // if (allTransactions && allTransactions.length > 0) {
    transaction = {
      _id:
        allTransactions.length > 0
          ? allTransactions[allTransactions.length - 1]._id + 1
          : 1,
      name: text,
      value: amount,
    };
    // }
    let payload = [...allTransactions, transaction];
    setAllTransaction(payload);
    // set into local Storage
    localStorage.setItem("allTransactions", JSON.stringify(payload));
    updateIncomeExpense();
    setText("");
    setAmount("");
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
