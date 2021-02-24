import React, { Component } from "react";
import "./BalanceInquiry.css";

/**
 *  flux using in class component
 */

class BalanceInquiry extends Component {
  render() {
    // console.log("this.props in BalanceInquiry", this.props);
    // return (
    // {(state) => {
    // nested array destructuring with default values
    // const {
    //   income: [totalIncome, setTotalIncome],
    //   expense: [totalExpense, setTotalExpense],
    // } = state;
    return (
      <div className="container">
        <span className="text">Your balance</span>
        <br />
        <span className="text">
          {/* $
              {totalIncome + totalExpense !== 0
                ? totalIncome + totalExpense + ".00"
                : totalIncome + totalExpense} */}
        </span>
      </div>
    );
    // }}
    // );
  }
}

export default BalanceInquiry;
