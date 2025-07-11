export default function ProductCard(props) {
  return (
    <div className="bg-gray-100 py-6 px-4">
      <div className="max-w-xl mx-auto bg-white rounded-2xl shadow-md p-6">
        <h1 className="text-2xl font-bold text-gray-800 mb-4 text-center">Product</h1>

        <img
          src={props.image}
          alt={props.name}
          className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
        />

        <p className="text-gray-700 text-base text-center">
          Name: <strong>{props.name}</strong>
        </p>

        {props.price && (
          <p className="text-gray-700 text-base text-center">
            Price: <strong>{props.price}</strong>
          </p>
        )}
      </div>
    </div>
  );
}
