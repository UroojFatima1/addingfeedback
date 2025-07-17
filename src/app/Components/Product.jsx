"use client";
import { FaCrown, FaShoppingCart } from "react-icons/fa";
import { useState } from "react";


export default function Product(props)
{
  const [clickCount, setClickCount] = useState(0); 
  const numericPrice = parseInt(props.price.replace(/[^\d]/g, ""));
  console.log(numericPrice);

   const handleClick = () => {
    setClickCount((prev) => prev + 1);
  };

  return (
    <div className="relative bg-white rounded-xl shadow p-4 flex flex-col items-center text-center">
      {numericPrice > 300 && (
        <div className="absolute top-2 right-2 text-yellow-500 text-xl">
          <FaCrown title="Premium Product" />
        </div>
      )}
      <img
        src={props.image}
        alt={props.name}
        className="w-32 h-32 object-cover rounded-full mb-4"
      />
      <h2 className="text-xl font-semibold text-gray-800 mb-1">{props.name}</h2>

      <div className="min-h-[30px]"> {props.description && (
        <p className="text-sm text-gray-600">{props.description}</p>
      )}</div>

      <p className=" text-lg font-bold text-indigo-600">{`Rs. ${props.price}`}</p>

      <button className="mt-2 bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-2 px-4 rounded-lg flex items-center gap-2 transition duration-200"
       onClick={handleClick}>
        <FaShoppingCart />
        Add to cart
      </button>
      <p className="text-sm text-gray-500 mt-2">Clicked {clickCount} times</p>
    </div>
  );
}
