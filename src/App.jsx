import React, { useState } from "react";
import "./App.css";

function App() {
  const [amount, setAmount] = useState("");
  const [discount, setDiscount] = useState("");
  const [finalAmount, setFinalAmount] = useState(null);

  const calculateDiscount = () => {
    if (amount && discount) {
      const discountValue = (amount * discount) / 100;
      setFinalAmount((amount - discountValue).toFixed(2));
    }
  };

  return (
    <div className="app">
      <div className="calculator">
        <h1>Bill & Discount Calculator</h1>

        <div className="input-group">
          <input
            type="number"
            placeholder="Enter Bill Amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
        </div>

        <div className="input-group">
          <input
            type="number"
            placeholder="Enter Discount (%)"
            value={discount}
            onChange={(e) => setDiscount(e.target.value)}
          />
        </div>

        <button onClick={calculateDiscount}>Calculate</button>

        {finalAmount !== null && (
          <div className="result">
            <h2>Final Amount: ₹{finalAmount}</h2>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
