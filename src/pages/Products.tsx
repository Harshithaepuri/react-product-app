import { useState, useReducer, useCallback } from "react";
import ProductItem from "../components/ProductItem";

const Products = ({products, dispatch}) => {
  
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [filter, setFilter] = useState("all");
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("");

  const addStudent = () => {
    if (!name || !price) return;
    const newProduct = {
      id: Date.now(),
      name,
      price,
      status: "available",
    };
    dispatch({ type: "ADD_PRODUCT", payload: newProduct });
    setName("");
    setPrice("");
  };

  const deleteProduct = useCallback((id) => {
    dispatch({ type: "DELETE_PRODUCT", payload: id });
  },[dispatch]);


  const saveProduct = (updatedProduct) => {
    dispatch({ type: "SAVE_PRODUCT", payload: updatedProduct });
  };

  const toggleStatus = useCallback((id) => {
    dispatch({ type: "TOGGLE_STATUS", payload: id });
  },[dispatch]);

  let filteredProducts = products.filter(
    (product) => filter === "all" || product.status === filter)

  .filter(
    (product) => product.name.toLowerCase().includes(search.toLowerCase())
  );

  if(sort === "price asc"){
    filteredProducts.sort((a,b) => a.price - b.price);
  }else if(sort === "price des"){
    filteredProducts.sort((a,b) => b.price - a.price);
  }

  return (
    <div className="p-6 max-w-6xl mx-auto">
    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
      <div className="flex gap-2">
      <select value={filter} onChange={(e) => setFilter(e.target.value)} className="border-2 rounded-lg p-2">
        <option value="all">All products</option>
        <option value="available">Only available</option>
        <option value="soldout">Only Sold Out</option>
      </select>

      <select value={sort} onChange={(e) => setSort(e.target.value)} className="border-2 rounded-lg p-2">
        <option value="price asc">Low to High</option>
        <option value="price des">High to Low</option>
      </select>
      </div>

      <input 
       type="text"
       placeholder="enter the search"
       value={search}
       onChange={(e) => setSearch(e.target.value)}
       className="border-2 rounded-lg p-3"
      />

      <input
        type="text"
        placeholder="enter the name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="border-2 rounded-lg p-3"
      />
      <input
        type="text"
        placeholder="enter the price"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
        className="border-2 rounded-lg p-3"
      />
      <button onClick={() => addStudent()} className="bg-blue-500 rounded-lg p-3 text-white">Add</button>

      </div>

      <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {filteredProducts.map((product) => (
          <li key={product.id}>
            <ProductItem
              product={product}
              deleteProduct={deleteProduct}
              toggleStatus={toggleStatus}
              saveProduct = {saveProduct}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Products;
