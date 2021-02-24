/**
 * Copyright (c) 2014-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */

"use strict";

import App from "./containers/App/App";
import { Container } from "flux/utils";
import TransactionActions from "./data/action/TransactionActions";
import TransactionStore from "./data/store/TransactionStore";

function getStores() {
  // return [TodoEditStore, TodoDraftStore, TodoStore];
  return [TransactionStore];
}

function getState() {
  return {
    // draft: TodoDraftStore.getState(),
    // editing: TodoEditStore.getState(),
    // todos: TodoStore.getState(),

    // onAdd: TodoActions.addTodo,
    // onDeleteCompletedTodos: TodoActions.deleteCompletedTodos,
    // onDeleteTodo: TodoActions.deleteTodo,
    // onEditTodo: TodoActions.editTodo,
    // onStartEditingTodo: TodoActions.startEditingTodo,
    // onStopEditingTodo: TodoActions.stopEditingTodo,
    // onToggleAllTodos: TodoActions.toggleAllTodos,
    // onToggleTodo: TodoActions.toggleTodo,
    // onUpdateDraft: TodoActions.updateDraft,

    // custom state

    // getting store
    state: TransactionStore.getState(),

    // custom actions
    addTransaction: TransactionActions.addTransaction,
    setAllTransactions: TransactionActions.setAllTransactions,
    setTotalIncome: TransactionActions.setTotalIncome,
    setTotalExpense: TransactionActions.setTotalExpense,
  };
}

const AppView = (props) => <App {...props} />;

export default Container.createFunctional(AppView, getStores, getState);
