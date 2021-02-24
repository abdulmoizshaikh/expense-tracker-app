import "./IncomeExpenseCard.css";

/*
 context using in functional component
 */
const IncomeExpenseCard = (props) => {
  // nested array destructuring with default values
  // const {
  //   income: [totalIncome = 0, setTotalIncome = {}],
  //   expense: [totalExpense = 0, setTotalExpense = {}],
  // } = state;
  // console.log("props in IncomeExpenseCard", props);
  return (
    <div className="container">
      <div id="card">
        <div className="cardItem">
          <p>INCOME</p>
          {/* <p id="income">{totalIncome}</p> */}
        </div>
        <p id="v-line" />
        <div className="cardItem">
          <p>EXPENSE</p>
          {/* <p id="expense">{totalExpense}</p> */}
        </div>
      </div>
    </div>
  );
};

export default IncomeExpenseCard;
