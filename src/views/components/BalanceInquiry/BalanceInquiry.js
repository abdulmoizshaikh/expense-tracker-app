import React, { Component } from "react";
import { RootContext } from "../../AppView";
import "./BalanceInquiry.css";

/**
 *  context using in class component
 */

class BalanceInquiry extends Component {
  render() {
    return (
      <RootContext.Consumer>
        {(state) => {
          // nested array destructuring with default values
          const {
            income: [totalIncome, setTotalIncome],
            expense: [totalExpense, setTotalExpense],
          } = state;
          return (
            <div className="container">
              <span className="text">Your balance</span>
              <br />
              <span className="text">
                $
                {totalIncome + totalExpense !== 0
                  ? totalIncome + totalExpense + ".00"
                  : totalIncome + totalExpense}
              </span>
            </div>
          );
        }}
      </RootContext.Consumer>
    );
  }
}

export default BalanceInquiry;
