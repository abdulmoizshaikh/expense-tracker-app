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
  } = state;

  // methods
  const onAddTransaction = () => {
    let transaction = {
      _id: allTransactions[allTransactions.length - 1]._id + 1,
      name: text,
      value: amount,
    };
    setAllTransaction([...allTransactions, transaction]);
    setText("");
    setAmount("");
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
          type="text"
          className="input"
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
