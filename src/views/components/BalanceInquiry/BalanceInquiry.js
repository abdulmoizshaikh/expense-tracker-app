import React, { Component } from "react";
import "./BalanceInquiry.css";

export default class BalanceInquiry extends Component {
  render() {
    // nested array destructuring with default values
    const {
      state: { totalIncome, totalExpense },
    } = this.props;

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
  }
}
