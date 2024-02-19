import React, { useState } from "react";
import { danktoken_backend } from "../../../declarations/danktoken_backend";

function Faucet() {

  const [isDisabled,setDisabled] = useState(false);
  const [btnText,setText]=useState("Gimme gimme")
  async function handleClick(event) {
    setDisabled(true);
   const result =  await danktoken_backend.payOut();
   setText(result);
  }

  return (
    <div className="blue window">
      <h2>
        <span role="img" aria-label="tap emoji">
          🚰
        </span>
        Faucet
      </h2>
      <label>Get your free DAngela tokens here! Claim 10,000 DANG coins to your account.</label>
      <p className="trade-buttons">
        <button id="btn-payout" onClick={handleClick} disabled={isDisabled}>
          {btnText}
        </button>
      </p>
    </div>
  );
}

export default Faucet;
