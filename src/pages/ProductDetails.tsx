import { useParams } from "react-router-dom";

const ProductDetails = ({ products }) => {
  const { id } = useParams();
  const product = products.find((p) => p.id === Number(id));

  if (!product)
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-50">
        <h1 className="text-3xl font-bold text-red-500">Product Not Found</h1>
      </div>
    );

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 p-6">
      <div className="bg-white shadow-lg rounded-xl p-8 w-full max-w-md">
        <h1 className="text-3xl font-bold text-blue-600 mb-4">{product.name}</h1>
        <h2 className="text-xl text-gray-700 mb-2">Price: ${product.price}</h2>
        <h3
          className={`text-lg font-medium mb-4 ${
            product.status === "available" ? "text-green-500" : "text-red-500"
          }`}
        >
          Status: {product.status}
        </h3>
        <button
          className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-lg"
          onClick={() => window.history.back()}
        >
          Go Back
        </button>
      </div>
    </div>
  );
};

export default ProductDetails;
