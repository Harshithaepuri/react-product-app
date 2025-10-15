import { useParams } from "react-router-dom";

const ProductDetails = ({products}) => {
    const {id} = useParams();
    const product = products.find((p) => p.id === Number(id));

    if(!product) return <h1>Product Not Found</h1>
    return(
        <div>
         <h1>{product.name}</h1>
         <h2>Price: {product.price}</h2>
         <h3>status: {product.status}</h3>
        </div>
    )
}

export default ProductDetails;