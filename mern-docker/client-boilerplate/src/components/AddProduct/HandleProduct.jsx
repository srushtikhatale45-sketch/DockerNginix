import React, { useState, useEffect } from "react";
import axios from "axios";
import "./AddProduct.css"; // Import the CSS file

const handleProduct = ({ productIdToUpdate, addProduct }) => {
  const [product, setProduct] = useState({});

  useEffect(() => {
    if (productIdToUpdate) {
      // Fetch existing product data if in update mode
      fetchProductData(productIdToUpdate);
    }
  }, [productIdToUpdate]);

  const handleChange = (e) => {
    setProduct({
      ...product,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("handleSumbit AddForm", product);
    addProduct(product);
  };

  const fetchProductData = async (productId) => {
    try {
      const response = await axios.get(
        `http://localhost:8000/products/${productId}`
      );
      setProduct(response.data);
    } catch (error) {
      console.error("Error fetching product data:", error);
    }
  };

  return (
    <form className="form-horizontal" onSubmit={handleSubmit}>
      <fieldset className="form-container">
        <legend>{productIdToUpdate ? "Update Product" : "Add Product"}</legend>

        <div className="form-group">
          <label htmlFor="title">Title</label>
          <input
            id="title"
            name="title"
            type="text"
            placeholder="Title"
            className="form-control"
            onChange={handleChange}
            value={product.title || ""}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="thumbnail">Thumbnail</label>
          <input
            id="thumbnail"
            name="thumbnail"
            type="text"
            placeholder="Thumbnail URL"
            className="form-control"
            onChange={handleChange}
            value={product.thumbnail || ""}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="price">Price</label>
          <input
            id="price"
            name="price"
            type="number"
            placeholder="Price"
            className="form-control"
            onChange={handleChange}
            value={product.price || ""}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="category">Category</label>
          <select
            id="category"
            name="category"
            className="form-control"
            onChange={handleChange}
            value={product.category || ""}
            required
          >
            <option value="">Choose</option>
            <option value="smartphone">SmartPhone</option>
            <option value="laptops">Laptops</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="brand">Brand</label>
          <select
            id="brand"
            name="brand"
            className="form-control"
            onChange={handleChange}
            value={product.brand || ""}
            required
          >
            <option value="">Choose</option>
            <option value="apple">Apple</option>
            <option value="samsung">Samsung</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="discountPercentage">Discount</label>
          <input
            id="discountPercentage"
            name="discountPercentage"
            type="number"
            placeholder="Discount Percentage"
            className="form-control"
            onChange={handleChange}
            value={product.discountPercentage || ""}
          />
          <span className="help-block">Optional: Discount Percentage</span>
        </div>

        <div className="form-group">
          <label htmlFor="description">Description</label>
          <textarea
            id="description"
            name="description"
            placeholder="Description"
            className="form-control"
            onChange={handleChange}
            value={product.description || ""}
          ></textarea>
        </div>

        <div className="form-group">
          <button
            id="singlebutton"
            name="singlebutton"
            className="btn btn-primary"
          >
            {productIdToUpdate ? "Update" : "Add"}
          </button>
        </div>
      </fieldset>
    </form>
  );
};

export default handleProduct;
