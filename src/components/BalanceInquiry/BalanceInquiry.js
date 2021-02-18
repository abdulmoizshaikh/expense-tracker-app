import React, { Component } from "react";
import { RootContext } from "../../App";
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
            balance: [balanceAmount = 0, setBalanceAmount = {}],
          } = state;
          return (
            <div className="container">
              <span className="text">Your balance</span>
              <br />
              <span className="text">{balanceAmount}</span>
            </div>
          );
        }}
      </RootContext.Consumer>
    );
  }
}

export default BalanceInquiry;
