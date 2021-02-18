import "./IncomeExpenseCard.css";

const IncomeExpenseCard = (props) => {
  const { totalIncome, totalExpense } = props;

  return (
    <div className="container">
      <div id="card">
        <div className="cardItem">
          <p>INCOME</p>
          <p className="income">{totalIncome && totalIncome}</p>
        </div>
        <div className="cardItem">
          <p>EXPENSE</p>
          <p className="expense">{totalExpense && totalExpense}</p>
        </div>
      </div>
    </div>
  );
};

export default IncomeExpenseCard;
