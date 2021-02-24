/**
 * Copyright (c) 2014-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */

"use strict";

import { ReduceStore } from "flux/utils";
import TodoActionTypes from "../actionTypes/TransactionActionTypes";
import TransactionDispatcher from "../dispatcher/TransactionDispatcher";

class TransactionStore extends ReduceStore {
  constructor() {
    super(TransactionDispatcher);
  }

  getInitialState() {
    return {
      allTransactions: [],
      totalIncome: 0,
      totalExpense: 0,
    };
  }

  reduce(state, action) {
    let updatedState = {};
    switch (action.type) {
      case TodoActionTypes.SET_ALL_TRANSACTIONS:
        updatedState = {
          ...state,
          allTransactions: [...state.allTransactions, ...action.payload],
        };
        return updatedState;

      case TodoActionTypes.ADD_TRANSACTION:
        updatedState = {
          ...state,
          allTransactions: [...state.allTransactions, action.payload],
        };
        localStorage.setItem(
          "allTransactions",
          JSON.stringify(updatedState.allTransactions)
        );
        return updatedState;

      case TodoActionTypes.SET_TOTAL_INCOME:
        updatedState = {
          ...state,
          totalIncome: action.payload,
        };
        return updatedState;

      case TodoActionTypes.SET_TOTAL_EXPENSE:
        updatedState = {
          ...state,
          totalExpense: action.payload,
        };
        return updatedState;

      default:
        return state;
    }
  }
}

export default new TransactionStore();
