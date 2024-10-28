import { useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

function ViewProductPage() {
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);
  const params = useParams();

  useEffect(() => {
    getProducts();
  });

  const getProducts = async () => {
    try {
      const response = await axios.get(
        `http://localhost:4001/products/${params.productId}`
      );
      setProducts(response.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <h1>View Product Page</h1>
      <div className="view-product-container">
        <h2>{products.name}</h2>
        <p>{products.description}</p>
      </div>
      <button onClick={() => navigate("/")}>Back to Home</button>
    </div>
  );
}

export default ViewProductPage;
