import react from "react";
import {Link} from "react-router-dom";

const Home = () => {
    return(
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50">
          <h1 className="text-4xl font-bold text-blue-600 mb-4">Welcome to HOME PAGE</h1>
          <p className="text-gray-600 text-lg mb-6">Manage Your Products Easily with this app</p>
          <Link to="/products" className="bg-blue-600 px-3 py-3 text-white rounded-lg ">Go To Products</Link>
        </div>
    )
}

export default Home;