import TransactionDispatcher from "../dispatcher/TransactionDispatcher";
import ActionTypes from "../actionTypes/TransactionActionTypes";

const Actions = {
  addTransaction(payload) {
    TransactionDispatcher.dispatch({
      type: ActionTypes.ADD_TRANSACTION,
      payload,
    });
  },

  setAllTransactions(payload) {
    TransactionDispatcher.dispatch({
      type: ActionTypes.SET_ALL_TRANSACTIONS,
      payload,
    });
  },

  setTotalIncome(payload) {
    TransactionDispatcher.dispatch({
      type: ActionTypes.SET_TOTAL_INCOME,
      payload,
    });
  },

  setTotalExpense(payload) {
    TransactionDispatcher.dispatch({
      type: ActionTypes.SET_TOTAL_EXPENSE,
      payload,
    });
  },
};

export default Actions;
