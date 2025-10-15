import { Routes, Route} from "react-router-dom";
import { useState,useEffect, useReducer, useCallback } from "react";
import Products from "./pages/Products";
import Navbar from "./components/Navbar";
import About from "./pages/About";
import Home from "./pages/Home";
import ProductDetails from "./pages/ProductDetails";

function reducer(state, action) {
  switch (action.type) {
    case "SET_PRODUCTS":
      return action.payload;

    case "ADD_PRODUCT":
      return [...state, action.payload];

    case "DELETE_PRODUCT":
      return state.filter((product) => product.id !== action.payload);

    case "SAVE_PRODUCT":
      return state.map((product) =>
        product.id === action.payload.id ? action.payload : product
      );

    case "TOGGLE_STATUS":
      return state.map((product) =>
        product.id === action.payload
          ? {
              ...product,
              status: product.status === "available" ? "soldout" : "available",
            }
          : product
      );

    default:
      return state;
  }
}

const App = () => {

  const [products, dispatch] = useReducer(reducer, []);
  const [loading, setLoading] = useState(true);


  useEffect(() => {
  async function fetchProducts(){

    try{
      const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await response.json();

    console.log("users", data);

   const apiproducts = data.map((user) => (
      {
        id:user.id,
        name: user.name,
        price: Math.floor(Math.random() * 1000) + 2000,
        status: "available",
      }
    ))
    dispatch({type: "SET_PRODUCTS", payload: apiproducts});
    }
    catch(error){
      console.log("error", error);
    }
    finally{
      setLoading(false);
    }
  }

  localStorage.removeItem("products");
 
  const stored = localStorage.getItem("products")
    console.log("Products from Local Storage:", stored);
      if(stored) {
        dispatch({type: "SET_PRODUCTS" , payload:JSON.parse(stored)})
        setLoading(false);
      }else{
        fetchProducts();
      }
  }, [])
  useEffect(() => {
  },[]);

  useEffect(() => {
    localStorage.setItem("products", JSON.stringify(products));
    console.log("products saved in localStorage", products);
  },[products]);

  if(loading) return <h2>Loading Products...</h2>

  return(
      <>
      <Navbar />

      <Routes>
         <Route path="/" element={<Home />}/>
         <Route path="/about" element = {<About />}/>
         <Route path="/products" element = {<Products products= {products} dispatch= {dispatch}/>}/>
         <Route path="/products/:id" element ={<ProductDetails products= {products}/>}/>
      </Routes>
   </>
  )
}

export default App;