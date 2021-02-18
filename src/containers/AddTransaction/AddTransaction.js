import React, { useContext } from "react";
import { RootContext } from "../../App";

const AddTransaction = () => {
  const state = useContext(RootContext);
  // nested array destructuring with default values
  const {
    transaction: [allTransactions = [], setAllTransaction = {}],
  } = state;
  return (
    <div className="container">
      <p>Add new transaction</p>

      <p>Text</p>
      <div>
        <input type="text" />
      </div>

      <div>
        <p>Amount, &#10;&#13; negative-expense,positive-income</p>
        <input type="text" />
      </div>
    </div>
  );
};

export default AddTransaction;
