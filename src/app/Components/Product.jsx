import { FaCrown } from "react-icons/fa";

export default function Product(props)
{
  const numericPrice = parseInt(props.price.replace(/[^\d]/g, ""));
  console.log(numericPrice);
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
      {props.description && (
        <p className="text-sm text-gray-600 mb-2">{props.description}</p>
      )}
      <p className="text-lg font-bold text-indigo-600">{`Rs. ${props.price}`}</p>
    </div>
  );
}
