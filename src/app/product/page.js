import Product from "../Components/Product";

const Products = [
  {
    id: "1",
    name: "Water",
    description: "Splash of Water!",
    image:
      "https://images.unsplash.com/photo-1683533893978-70a5a6f613e3?w=500&auto=format&fit=crop&q=60",
    price: "80",
  },
  {
    id: "2",
    name: "Colddrink",
    image:
      "https://images.unsplash.com/photo-1598038990523-32bcaa29f679?q=80&w=687&auto=format&fit=crop",
    price: "120",
  },
  {
    id: "3",
    name: "Cheetos",
    description: "Fulfil your cravings!",
    image:
      "https://media.istockphoto.com/id/985100478/photo/cereal-snack.webp?a=1&b=1&s=612x612&w=0&k=20&c=Y97ktJ7i6bBAjzpvdE2uO4Co8kQRA6jrygE3MUfZmxE=",
    price: "100",
  },
  {
    id: "4",
    name: "Milk",
    image:
      "https://images.unsplash.com/photo-1563636619-e9143da7973b?q=80&w=765&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: "400",
  },
  {
    id: "5",
    name: "Cookies",
    description: "One bite, endless delight!",
    image:
      "https://images.unsplash.com/photo-1657418830273-40c19cfff4d7?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: "150",
  },
  {
    id: "6",
    name: "Coffee",
    description: "Freshly ground. Deeply satisfying",
    image: "https://images.unsplash.com/photo-1598524817357-f7d55f772246?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: "1000",
  },
];

export default function ProductPage()
{
  return (
    <div className="min-h-screen bg-gray-100 py-16 px-4">
      <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-md p-8 mb-12">
        <h1 className="text-3xl font-bold text-gray-800 mb-4 text-center">
          Product Page
        </h1>
        <p className="text-gray-700 text-base text-center">
          Explore our amazing products and find what suits you best! We're always
          adding new items to help you get the most value.
        </p>
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {Products.map((product) => (
          <Product
            key={product.id}
            name={product.name}
            description={product.description}
            image={product.image}
            price={product.price}
          />
        ))}
      </div>
    </div>
  );
}
