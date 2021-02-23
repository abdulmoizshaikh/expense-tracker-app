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
    return "";
  }

  reduce(state, action) {
    switch (action.type) {
      case TodoActionTypes.ADD_TRANSACTION:
        return "";

      default:
        return state;
    }
  }
}

export default new TransactionStore();
