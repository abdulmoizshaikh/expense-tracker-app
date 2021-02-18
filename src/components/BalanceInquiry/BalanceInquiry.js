import "./BalanceInquiry.css";

const BalanceInquiry = (props) => {
  const { balanceAmount } = props;
  return (
    <div className="container">
      <span className="text">Your balance</span>
      <br />
      <span className="text">${balanceAmount && balanceAmount}</span>
    </div>
  );
};

export default BalanceInquiry;
