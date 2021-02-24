import React, { Component } from "react";
import "./BalanceInquiry.css";

/**
 *  context using in class component
 */

class BalanceInquiry extends Component {
  constructor(props) {
    super(props);
    this.state = {
      totalIncome: 0,
    };
  }

  render() {
    return <div>totalIncome {this.state.totalIncome}</div>;
  }
}

export default BalanceInquiry;

/* // return (
    //   {(state) => {
    //     // nested array destructuring with default values
    //     const {
    //       income: [totalIncome, setTotalIncome],
    //       expense: [totalExpense, setTotalExpense],
    //     } = state;
    //     return (
    //       <div className="container">
    //         <span className="text">Your balance</span>
    //         <br />
    //         <span className="text">
    //           $
    //           {totalIncome + totalExpense !== 0
    //             ? totalIncome + totalExpense + ".00"
    //             : totalIncome + totalExpense}
    //         </span>
    //       </div>
    //     );
    //   }}
    // ); */
