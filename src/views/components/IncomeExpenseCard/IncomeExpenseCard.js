import "./IncomeExpenseCard.css";

const IncomeExpenseCard = (props) => {
  // nested array destructuring with default values
  const {
    state: { totalIncome = 0, totalExpense = 0 },
  } = props;

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
