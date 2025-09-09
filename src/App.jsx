import React, { useState } from "react";

function App() {
  const [amount, setAmount] = useState("");
  const [discount, setDiscount] = useState("");
  const [finalAmount, setFinalAmount] = useState(null);

  const calculateDiscount = () => {
    if (amount && discount) {
      const discountValue = (amount * discount) / 100;
      setFinalAmount(amount - discountValue);
    }
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Bill & Discount Calculator</h1>

      <input
        type="number"
        placeholder="Enter Bill Amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        style={{ margin: "10px", padding: "10px" }}
      />
      <br />

      <input
        type="number"
        placeholder="Enter Discount (%)"
        value={discount}
        onChange={(e) => setDiscount(e.target.value)}
        style={{ margin: "10px", padding: "10px" }}
      />
      <br />

      <button onClick={calculateDiscount} style={{ padding: "10px 20px" }}>
        Calculate
      </button>

      {finalAmount !== null && (
        <h2 style={{ marginTop: "20px" }}>Final Amount: ₹{finalAmount}</h2>
      )}
    </div>
  );
}

export default App;
