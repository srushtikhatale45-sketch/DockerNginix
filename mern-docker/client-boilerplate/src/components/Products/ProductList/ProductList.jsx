import React from "react";
import Product from "../Product/Product";
import "./ProductList.css";
import ContentWrapper from "../../ContentWrapper/ContentWrapper";
function ProductList({ products }) {
  return (
    <ContentWrapper>
      <div className="allContainer">
        {products.map((product, index) => (
          <Product {...product} key={index}></Product>
        ))}
      </div>
    </ContentWrapper>
  );
}

export default ProductList;
