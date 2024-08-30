"use client";

import { useState } from "react";

type Props = {};

export default function ProductQuantity({}: Props) {
  const [quantity, setQuantity] = useState(1);

  return (
    <div className="relative flex items-center">
      <button
        onClick={() => {
          if (quantity > 0) setQuantity(quantity - 1);
        }}
        type="button"
        id="decrement-button"
        className="flex-shrink-0 primary_btn px-0 py-0 inline-flex items-center justify-center  rounded-md !h-5 !w-5 focus:outline-none"
      >
        <svg
          className="w-2.5 h-2.5 text-white"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 18 2"
        >
          <path
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M1 1h16"
          />
        </svg>
      </button>
      <input
        type="text"
        id="counter-input"
        data-input-counter
        className="flex-shrink-0 text-black  bg-transparent text-sm font-normal focus:outline-none max-w-[2.5rem] text-center"
        placeholder=""
        value={quantity}
        required
      />
      <button
        onClick={() => {
          setQuantity(quantity + 1);
        }}
        type="button"
        id="increment-button"
        className="flex-shrink-0 primary_btn px-0 py-0 inline-flex items-center justify-center  rounded-md !h-5 !w-5 focus:outline-none"
      >
        <svg
          className="w-2.5 h-2.5 text-white"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 18 18"
        >
          <path
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M9 1v16M1 9h16"
          />
        </svg>
      </button>
    </div>
  );
}
