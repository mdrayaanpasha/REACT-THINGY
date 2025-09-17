import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React, { useState } from "react";

function Ray() {
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

function AN() {
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
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-6">
      <div className="bg-white rounded-2xl shadow-lg p-8 w-full max-w-md">
        <h1 className="text-2xl font-bold text-gray-800 mb-6 text-center">
          Bill & Discount Calculator
        </h1>

        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Bill Amount
            </label>
            <input
              type="number"
              placeholder="Enter Bill Amount"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              className="w-full rounded-lg border border-gray-300 p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Discount (%)
            </label>
            <input
              type="number"
              placeholder="Enter Discount"
              value={discount}
              onChange={(e) => setDiscount(e.target.value)}
              className="w-full rounded-lg border border-gray-300 p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <button
            onClick={calculateDiscount}
            className="w-full bg-blue-500 text-white font-semibold py-2 rounded-lg hover:bg-blue-600 transition"
          >
            Calculate
          </button>
        </div>

        {finalAmount !== null && (
          <div className="mt-6 bg-blue-50 p-4 rounded-lg text-center">
            <h2 className="text-lg font-semibold text-gray-800">
              Final Amount: <span className="text-blue-600">₹{finalAmount}</span>
            </h2>
          </div>
        )}
      </div>
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Ray />} />
        <Route path="/anu" element={<AN />} />
      </Routes>
    </Router>
  );
}
