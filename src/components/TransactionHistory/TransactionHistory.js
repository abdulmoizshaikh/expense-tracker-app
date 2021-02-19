import React, { useContext } from "react";
import { RootContext } from "../../App";
import "./TransactionHistory.css";

const TransactionCard = (props) => {
  const { _id, name, value } = props;
  return (
    <div id="t-card" className={value < 0 ? "red-border" : "green-border"}>
      <p className="card-item">
        {_id}.{name}
      </p>
      <p className="card-item">{value}$</p>
    </div>
  );
};

const TransactionHistory = () => {
  const state = useContext(RootContext);
  // nested array destructuring with default values
  const {
    transaction: [allTransactions = []],
  } = state;
  return (
    <div className="container">
      <p className="bold">History</p>
      <p className="hr" />

      {/* rendering transaction items here with name and value */}
      <div>
        {allTransactions.map((_transaction) => (
          <TransactionCard key={_transaction._id} {..._transaction} />
        ))}
      </div>
    </div>
  );
};
export default TransactionHistory;
