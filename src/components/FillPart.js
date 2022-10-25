import React from "react";
import Reset from "./Reset";
import Logo from "../images/logo.svg";
import "../App.css";
import { useState } from "react";

const FillPart = () => {
  const [catchedBill, setCatchedBill] = useState("");
  const [catchCustom, setCatchCustom] = useState("");
  const [catchPeople, setCatchpeople] = useState("");
  const [perCent, setPerCent] = useState();
  const [tipTotal, setTipTotal] = useState("0.00");

  let total = "0.00";
  let amount = "0.00";
  if (catchedBill > 0 && catchPeople > 0 && (perCent > 0 || catchCustom > 0)) {
    let perCentAmount = perCent > 0 ? perCent : catchCustom;
    let calculated = Number(
      ((catchedBill / 100) * perCentAmount) / catchPeople
    );
    total = calculated;
    amount = Number(calculated / catchPeople);
  }

  const clickHandler = (e) => {
    setPerCent(Number(e.target.value));
  };
  const handleBillInput = (e) => {
    setCatchedBill(Number(e.target.value));
  };

  const inputHandler = (e) => {
    setCatchCustom(Number(e.target.value));
  };
  const peopleHandler = (e) => {
    setCatchpeople(Number(e.target.value));
  };

  const addError = () => {
    if (catchPeople === 0) {
      console.log("fgrrrfg");
      return <h4>Can’t be zero</h4>;
    }
  };

  return (
    <div className="main">
      <img className="logo" src={Logo} alt="logo" />
      <div className="container">
        <div className="forPaddings">
          <div className="forColumn">
            <label className="Labels labBill" htmlFor="FillText">
              Bill
            </label>
            <input
              onChange={handleBillInput}
              min="1"
              type="number"
              id="FillText"
              placeholder="0"
              value={catchedBill}
            />
          </div>
          <div className="selectTip">
            <div className="Labels Second ">
              <label htmlFor="Labels">Select Tip %</label>
            </div>
            <div className="perCentButtons" id="perCentButtons">
              <button onClick={clickHandler} className="tipPerCent" value="5">
                5%
              </button>
              <button onClick={clickHandler} className="tipPerCent" value="10">
                10%
              </button>
              <button onClick={clickHandler} className="tipPerCent" value="15">
                15%
              </button>
              <button onClick={clickHandler} className="tipPerCent" value="25">
                25%
              </button>
              <button onClick={clickHandler} className="tipPerCent" value="50">
                50%
              </button>
            </div>
            <div>
              <input
                onChange={inputHandler}
                min="1"
                type="number"
                className="tipAmountNumber"
                placeholder="custom"
                value={catchCustom}
              ></input>
            </div>
          </div>
          <div className="sevarntsContainer">
            <div className="errorFlex">
              <div className="Labels Second forDesktopSec">
                <label htmlFor="Labels">Number of People</label>
              </div>
              <div className="errorText">{addError()}</div>
            </div>
            <input
              onChange={(e) => {
                peopleHandler(e);
              }}
              min="0"
              type="number"
              id="FillText"
              placeholder="0"
              className="numP"
              style={{border: catchPeople===0 ? "2px solid red" : ""}}
              value={catchPeople}
            />
          </div>
        </div>
        <Reset
          catchedBill={catchedBill}
          catchCustom={catchCustom}
          catchPeople={catchPeople}
          setCatchedBill={setCatchedBill}
          setCatchCustom={setCatchCustom}
          setCatchpeople={setCatchpeople}
          perCent={perCent}
          setPerCent={setPerCent}
          total={total}
          setTipTotal={setTipTotal}
          amount={amount}
        />
      </div>
    </div>
  );
};

export default FillPart;
