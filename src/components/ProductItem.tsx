import React,{ useState }from "react";
import {Link} from "react-router-dom";

const ProductItem = ({ product, deleteProduct, editProduct, toggleStatus, saveProduct }) => {
  const [isediting, setIsEditing] = useState(false);
  const [editName, setEditName] = useState(product.name);
  const [editPrice, setEditPrice] = useState(product.price);
  console.log("rendering:", product.name);

  const save = () => {
    saveProduct({ id: product.id, name: editName, price: editPrice });
    setIsEditing(false);
  };

  return (

    <div className="flex flex-col gap-4 shadow-md rounded-lg border-2 p-4">    

{isediting && (
        <div>
          <input
            type="text"
            placeholder="enter the editName"
            value={editName}
            onChange={(e) => setEditName(e.target.value)}
            className="border-2 rounded-lg p-3"
          />
          <input
            type="text"
            placeholder="enter the editPrice"
            value={editPrice}
            onChange={(e) => setEditPrice(e.target.value)}
            className="border-2 rounded-lg p-3"
          />
          <button onClick={save} className="border-2 rounded-lg p-3 bg-blue-400 text-white">Save</button>
          <button onClick={() => setIsEditing(false)} className="border-2 rounded-lg p-3 bg-blue-400 text-white">Cancel</button>
        </div>
      )}
      <Link to={`/products/${product.id}`}>
          <h1 className="text-xl font-bold">{product.name}</h1>
      </Link>
      <h1 className="text-xl font-medium">{product.price}</h1>
      <h1 className="text-red text-xl">{product.status}</h1>
      <div className="flex gap-4">
      <button onClick={() => deleteProduct(product.id)} className="bg-red-500 text-white rounded-lg border-2 p-3">Delete</button>
      <button onClick={() => setIsEditing(true)} className="bg-blue-500 text-white rounded-lg border-2 p-3">Edit</button>
      <button onClick={() => toggleStatus(product.id)} className="bg-orange-500 text-white rounded-lg border-2 p-3">
        {product.status === "available"
          ? "make it soldout"
          : "make it available"}
      </button>
        </div>
    </div>
  );
};

export default React.memo(ProductItem);
