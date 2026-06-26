import React, { useState, useEffect } from "react";
import axios from "axios";
import "./AdminPanel.css";
import AdminProduct from "./AdminProduct";
import { useNavigate } from "react-router-dom";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ContentWrapper from "../ContentWrapper/ContentWrapper";

function AdminPanel({ products, handleDelete, handleUpdate }) {
  const [product, setProduct] = useState({});

  const [productdetail, setProductDetails] = useState(null);
  console.log(productdetail);
  const [id, setID] = useState("");
  const navigate = useNavigate(); // Use useNavigate instead of useHistory

  const handleAddProductClick = (id) => {
    // Navigate to the AddProduct component when the button is clicked
    navigate("/addproduct");
  };

  const getProductsFromAPI = async (id) => {
    console.log("getProductDetails");
    try {
      const response = await axios.get(`http://localhost:8000/products/${id}`);
      console.log("getProductDetails ->", response.data);
      setProductDetails(response.data);
      setProduct(response.data);
    } catch (err) {
      console.log(err);
    }
  };
  const getProductDetails = (e) => {
    e.preventDefault();
    console.log("getProductDetails");
    getProductsFromAPI(id);
  };

  const getProductsUpdated = (id) => {
    console.log("getProductsUpdated", id);
    getProductsFromAPI(id);
  };

  const handleChange = (e) => {
    setProduct({
      ...product,
      [e.target.name]: e.target.value,
    });
  };
  const handleUpdateForm = (e) => {
    e.preventDefault();
    console.log(product._id, product);
    handleUpdate(product._id, product);
  };

  // ternay operator
  // and or opertor
  // boolean
  // null 0 undefined ""  false
  return (
    <ContentWrapper>
      <div className="AdminPanel">
        <h1 className="admintitle">Admin Panel</h1>

        <button onClick={handleAddProductClick}>Add New Product</button>
        <div className="getProductDetails">
          <form onSubmit={getProductDetails}>
            <p> Get Details:</p>
            <label htmlFor="id">
              ID :
              <input
                type="text"
                id="id"
                value={id}
                onChange={(e) => setID(e.target.value)}
              />
            </label>
            <button type="submit">Get Product Details</button>
          </form>
          <div className="updateUI">
            <div>
              {productdetail && (
                <div>
                  <div className="productadContainer">
                    <div className="imgntitle">
                      <img src={productdetail.thumbnail} />
                      <h3>{productdetail.title}</h3>
                    </div>
                    <div className="otherInfo">
                      <p>Price:{productdetail.price}$</p>
                      <p>
                        discountPercentage:{productdetail.discountPercentage}%
                      </p>
                      <p>rating:{productdetail.rating}</p>
                    </div>
                    <div className="buttons">
                      <button onClick={() => handleDelete(productdetail._id)}>
                        Delete
                      </button>
                    </div>
                    <p></p>
                  </div>
                </div>
              )}
            </div>
            <div>
              {productdetail && (
                <form className="formcon" onSubmit={handleUpdateForm}>
                  <fieldset className="form-container2">
                    <legend>Update Product</legend>

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
                      <span className="help-block">
                        Optional: Discount Percentage
                      </span>
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
                        Update
                      </button>
                    </div>
                  </fieldset>
                </form>
              )}
            </div>
          </div>
        </div>
        <div className="productpanel">
          {products?.map((product) => {
            // console.log(product);
            return (
              <AdminProduct
                key={product._id}
                {...product}
                handleDelete={handleDelete}
                getProductsUpdated={getProductsUpdated}
              />
            );
          })}
        </div>
      </div>
    </ContentWrapper>
  );
}

export default AdminPanel;
