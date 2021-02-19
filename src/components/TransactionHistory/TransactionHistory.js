import React, { useContext } from "react";
import { RootContext } from "../../App";
import "./TransactionHistory.css";

const TransactionCard = (props) => {
  const { name, value } = props;
  return (
    <div id="t-card">
      <p className="card-item">{name}</p>
      <p className="card-item">{value}</p>
    </div>
  );
};

const TransactionHistory = () => {
  const state = useContext(RootContext);
  // nested array destructuring with default values
  const {
    transaction: [allTransactions = [], setAllTransaction = {}],
  } = state;
  return (
    <div className="container">
      <p className="bold">History</p>
      <p className="hr" />

      {/* rendering transaction items here with name and value */}
      <div>
        {allTransactions.map(({ _id, name, value }) => (
          <TransactionCard key={_id} name={name} value={value} />
        ))}
      </div>
    </div>
  );
};
export default TransactionHistory;
