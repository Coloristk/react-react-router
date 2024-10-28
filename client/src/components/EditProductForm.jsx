import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";

function EditProductForm() {
  const params = useParams();
  const navigate = useNavigate();
  const [products, setProducts] = useState({
    name: "",
    image: "",
    price: "",
    description: "",
  });

  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = async () => {
    try {
      const results = await axios.get(
        `http://localhost:4001/products/${params.productId}`
      );
      setProducts(results.data.data);
    } catch (error) {
      console.log(error);
    }
  };
  const editeNewProduct = async (e) => {
    e.preventDefault();
    try {
      await axios.put(
        `http://localhost:4001/products/${params.productId}`,
        products
      );
    } catch (error) {}
    navigate("/");
  };

  return (
    <form className="product-form" onSubmit={editeNewProduct}>
      <h1>Edit Product Form</h1>
      <div className="input-container">
        <label>
          Name
          <input
            id="name"
            name="name"
            type="text"
            placeholder="Enter name here"
            onChange={(e) => {
              setProducts({ ...products, name: e.target.value });
            }}
            value={products.name}
          />
        </label>
      </div>
      <div className="input-container">
        <label>
          Image Url
          <input
            id="image"
            name="image"
            type="text"
            placeholder="Enter image url here"
            onChange={(e) => {
              setProducts({ ...products, image: e.target.value });
            }}
            value={products.image}
          />
        </label>
      </div>
      <div className="input-container">
        <label>
          Price
          <input
            id="price"
            name="price"
            type="number"
            placeholder="Enter price here"
            onChange={(e) => {
              setProducts({ ...products, price: e.target.value });
            }}
            value={products.price}
          />
        </label>
      </div>
      <div className="input-container">
        <label>
          Description
          <textarea
            id="description"
            name="description"
            type="text"
            placeholder="Enter description here"
            onChange={(e) => {
              setProducts({ ...products, description: e.target.value });
            }}
            value={products.description}
            rows={4}
            cols={30}
          />
        </label>
      </div>
      <div className="form-actions">
        <button type="submit" onClick={() => nevigate("/")}>
          Update
        </button>
      </div>
    </form>
  );
}

export default EditProductForm;
