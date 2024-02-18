import React, { useState } from "react";
import { danktoken_backend } from "../../../declarations/danktoken_backend";
import {Principal} from "@dfinity/principal";

function Balance() {
  
  const [inputValue,setInputValue]= useState("");
  const [balanceResult,setBalanceResult]= useState("");
  const [cryptoSymbol,setCrptoSymbol] = useState("");
  const [isHidden,setHidden] = useState(true);
  async function handleClick() {
    console.log("Balance Button Clicked");
    if(inputValue == "") return;
    const principal = Principal.fromText(inputValue);
    const balance = await danktoken_backend.balanceOf(principal);
    setBalanceResult(balance.toLocaleString());
    const symbol = await danktoken_backend.getSymbol();
    setCrptoSymbol(symbol);
    setHidden(false);
  }


  return (
    <div className="window white">
      <label>Check account token balance:</label>
      <p>
        <input
          id="balance-principal-id"
          type="text"
          placeholder="Enter a Principal ID"
          value={inputValue}
          onChange={(e)=>setInputValue(e.target.value)}

        />
      </p>
      <p className="trade-buttons">
        <button
          id="btn-request-balance"
          onClick={handleClick}
        >
          Check Balance
        </button>
      </p>
     
     {} <p hidden={isHidden}>This account has a balance of {balanceResult} {cryptoSymbol}.</p>
    </div>
  );
}

export default Balance;
