import React, { useEffect, useState } from "react";
import ProductList from "./components/Products/ProductList/ProductList";
import axios from "axios";
import AdminPanel from "./components/AdminPanel/AdminPanel";
import ContentWrapper from "./components/ContentWrapper/ContentWrapper";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "./index.css";
import HandleProduct from "./components/AddProduct/HandleProduct";

function App() {
  const [products, setProducts] = useState([]);
  const [isError, setIsError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    // console.log("useeffect");
    const getProductsFromAPI = async () => {
      setIsLoading(true);
      try {
        const response = await axios.get("http://localhost:8000/products");
        setProducts(response.data);
      } catch (err) {
        console.log(err);
        setIsError(err.message);
      } finally {
        setIsLoading(false);
      }
    };

    getProductsFromAPI();
  }, []);

  const handleDelete = async (id) => {
    try {
      const res = await axios.delete(`http://localhost:8000/products/${id}`);
      if (res.data._id) {
        setProducts(products.filter((p) => p._id !== res.data._id));
      }
    } catch (error) {
      console.error("Error deleting product:", error);
    }
  };

  const addProduct = async (product) => {
    try {
      const res = await axios.post("http://localhost:8000/products", product);
      console.log("addproduct postReq", res);
      setProducts((prev) => [...prev, res.data]);
    } catch (error) {
      console.error("Error Adding product:", error);
    }
  };

  const handleUpdate = async (id, product) => {
    console.log("inside Update ASync");
    try {
      const res = await axios.patch(
        `http://localhost:8000/products/${id}`,
        product
      );
      console.log("Product updated:", res.data);
      setProducts((prev) => [...prev]);
    } catch (error) {
      console.error("Error updating product:", error);
    }
  };

  return (
    <Router>
      <ContentWrapper>
        <div>
          <nav className="navbar">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link to="/" className="nav-link">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/admin" className="nav-link">
                  Admin Panel
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/admin" className="nav-link">
                  Favourites
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/admin" className="nav-link">
                  About Us
                </Link>
              </li>
            </ul>
          </nav>

          <Routes>
            <Route path="/" element={<ProductList products={products} />} />
            <Route
              path="/admin"
              element={
                <AdminPanel
                  products={products}
                  handleDelete={handleDelete}
                  handleUpdate={handleUpdate}
                />
              }
            />
            <Route
              path="/addproduct"
              element={<HandleProduct addProduct={addProduct} />}
            />
          </Routes>
        </div>
      </ContentWrapper>
    </Router>
  );
}

export default App;
