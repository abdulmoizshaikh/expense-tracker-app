import TransactionDispatcher from "../dispatcher/TransactionDispatcher";
import ActionTypes from "../actionTypes/TransactionActionTypes";

const Actions = {
  addTransaction(data) {
    TransactionDispatcher({
      type: ActionTypes.ADD_TRANSACTION,
      data,
    });
  },
};

export default Actions;
