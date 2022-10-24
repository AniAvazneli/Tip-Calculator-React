import "../App.css";

const Reset = ({
  catchedBill,
  setCatchedBill,
  catchCustom,
  setCatchCustom,
  catchPeople,
  setCatchpeople,
  perCent,
  setPerCent,
  total,
  amount,
}) => {
  const resetHandler = () => {
    setCatchpeople("");
    setCatchCustom("");
    setCatchedBill("");
    setPerCent();
  };

  return (
    <div className="calculation">
      <div className="beforeReset">
        <div className="resultText">
          <div className="rerPerson">
            <h3 className="heads">Tip Amount</h3>
            <h5 className="persons">/ person</h5>
          </div>
          <div className="results" id="tipAmount">
            <span className="resultNumbers" id="tipamount1">
              {"$" + (+amount).toFixed(2)}
            </span>
          </div>
        </div>
        <div className="result" id="result">
          <div className="totol">
            <h3 className="heads">Total</h3>
            <h5 className="persons">/ person</h5>
          </div>
          <div className="results" id="total">
            <span className="resultNumbers" id="totalAmount1">
              {"$" + (+total).toFixed(2)}
            </span>
          </div>
        </div>
      </div>
      <div className="resetButDiv">
        <button onClick={resetHandler} id="reset">
          RESET
        </button>
      </div>
    </div>
  );
};

export default Reset;
