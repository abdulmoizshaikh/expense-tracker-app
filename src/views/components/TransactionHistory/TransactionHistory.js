import React, { useEffect } from "react";
import "./TransactionHistory.css";

const TransactionHistory = () => {
  // // nested array destructuring with default values
  // const {
  //   transaction: [allTransactions = [], setAllTransaction = []],
  // } = state;

  const TransactionCard = (props) => {
    let { _id, name, value } = props;
    let splitedValue = JSON.stringify(value).split("-");
    return (
      <div id="t-card" className={value < 0 ? "red-border" : "green-border"}>
        <p className="card-item">
          {_id}. {name}
        </p>
        <p className="card-item">
          {splitedValue.length > 1
            ? `-$${parseFloat(splitedValue[1])}`
            : `$${value}`}
        </p>
      </div>
    );
  };

  return (
    <div className="container">
      <p className="bold">History</p>
      <p className="hr" />

      {/* rendering transaction items here with name and value */}
      {/* <div>
        {allTransactions &&
          allTransactions.length > 0 &&
          allTransactions.map((_transaction) => (
            <TransactionCard key={_transaction._id} {..._transaction} />
          ))}
      </div> */}
    </div>
  );
};

export default TransactionHistory;
