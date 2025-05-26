import React, { useEffect, useState } from "react";
import { FaHammer } from "react-icons/fa6";

export default function PlaceBid({ isOpen, onClose, item }) {
  const [currencies, setCurrencies] = useState([]);

  useEffect(() => {
    // Fetch currencies on mount
    fetch("https://open.er-api.com/v6/latest/USD")
      .then((res) => res.json())
      .then((data) => {
        if (data && data.rates) {
          // rates object keys are currency codes
          setCurrencies(Object.keys(data.rates));
        }
      })
      .catch((error) => {
        console.error("Failed to fetch currencies:", error);
        setCurrencies(["USD", "EUR", "INR"]); // fallback currencies
      });
  }, []);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Bid submitted!");
    if (onClose) onClose();
  };

  return (
    <div
      className="fixed inset-0 z-50 bg-black/10 bg-opacity-70 flex items-center justify-center px-4"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-2xl shadow-xl w-full max-w-md p-6 relative animate-fadeIn"
        onClick={(e) => e.stopPropagation()}
      >

        <div className="relative w-full flex items-center gap-4 mb-6">
          {/* Modal Title */}
          <h2 className="text-2xl font-extrabold text-center text-[var(--var-red-col)]">
            Place Your Bid - {item?.name}
          </h2>

          {/* Close Button */}
          <button
            className="absolute right-0 top-1/2 -translate-y-1/2 py-1 px-2 border border-gray-300 rounded-full 
               hover:bg-gray-100 hover:text-[var(--var-red-col)] transition-all duration-300"
            onClick={onClose}
            aria-label="Close"
          >
            ✕
          </button>
        </div>

        {/* Bid Form */}
        <form onSubmit={handleSubmit} className="space-y-5 text-gray-700">
          <div className="flex flex-col">
            <label htmlFor="bidAmount" className="mb-1 font-semibold">
              Bid Amount
            </label>
            <input
              type="number"
              id="bidAmount"
              name="bidAmount"
              placeholder="Bidding Amount per Brick"
              min={0}
              className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-[var(--var-red-col)]"
              required
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="currency" className="mb-1 font-semibold">
              Currency
            </label>
            <select
              id="currency"
              name="currency"
              className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-[var(--var-red-col)]"
              required
              defaultValue=""
            >
              <option value="" disabled>
                Select currency
              </option>
              {currencies.map((cur) => (
                <option key={cur} value={cur}>
                  {cur}
                </option>
              ))}
            </select>
          </div>

          <div className="flex flex-col">
            <label htmlFor="quantity" className="mb-1 font-semibold">
              Minimum Quantity
            </label>
            <input
              type="number"
              id="quantity"
              name="quantity"
              placeholder="Quantity minimum 1000"
              min={1000}
              className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-[var(--var-red-col)]"
              required
            />
          </div>
          <div className="flex items-center justify-end gap-4 mt-6">
            {/* Cancel Button */}
            <button
              onClick={onClose}
              aria-label="Close modal"
              className="text-gray-600 cursor-pointer border-[1px] px-3 py-1 rounded-md hover:text-[var(--var-red-col)] transition-colors duration-200 font-semibold"
            >
              Cancel
            </button>

            {/* Submit Button */}
            <button
              type="submit"
              className="flex items-center gap-2 bg-[var(--var-red-col)] text-white px-4 py-2 rounded-md font-semibold hover:bg-red-700 transition"
            >
              <FaHammer />
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
