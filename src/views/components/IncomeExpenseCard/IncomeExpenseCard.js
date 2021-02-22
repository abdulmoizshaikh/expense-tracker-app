import { useContext } from "react";
import { RootContext } from "../../AppView";
import "./IncomeExpenseCard.css";

/*
 context using in functional component
 */
const IncomeExpenseCard = () => {
  const state = useContext(RootContext);
  // nested array destructuring with default values
  const {
    income: [totalIncome = 0, setTotalIncome = {}],
    expense: [totalExpense = 0, setTotalExpense = {}],
  } = state;

  return (
    <div className="container">
      <div id="card">
        <div className="cardItem">
          <p>INCOME</p>
          <p id="income">{totalIncome}</p>
        </div>
        <p id="v-line" />
        <div className="cardItem">
          <p>EXPENSE</p>
          <p id="expense">{totalExpense}</p>
        </div>
      </div>
    </div>
  );
};

export default IncomeExpenseCard;
