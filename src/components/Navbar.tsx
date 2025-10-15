

import { Link } from "react-router-dom";

const Navbar = () => {
    return(
        <nav className="bg-blue-600 text-white p-4 shadow-md">
        <div className="max-w-6xl mx-auto flex items-center justify-between">

        <div className="text-2xl font-bold">MyShop</div>
            <div className="flex space-x-6">

       <Link to="/" className="hover:text-yellow-300 transition-colors duration-200 text-lg font-medium">Home</Link> 
       <Link to="/products"  className="hover:text-yellow-300 transition-colors duration-200 text-lg font-medium">Products</Link>
       <Link to="/about"  className="hover:text-yellow-300 transition-colors duration-200 text-lg font-medium">About</Link>
       </div>
        </div>
        </nav>
    )
}

export default Navbar;