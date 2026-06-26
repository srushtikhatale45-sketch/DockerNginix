import React from "react";
import "./Product.css";
import { CiHeart, CiStar } from "react-icons/ci";

function Product({
  _id,
  title,
  thumbnail,
  price,
  discountPercentage,
  rating,
  handleClick,
}) {
  return (
    <>
      <div className="productcontainer">
        <div className="card">
          <div className="image-container">
            <div className="first">
              <span className="discount">-{discountPercentage}%</span>
              <div className="wishlist">
                <CiHeart />
              </div>
            </div>
            <img
              src={thumbnail}
              className="img-fluid rounded thumbnail-image"
              alt={title}
            />
          </div>
          <div className="product-detail-container">
            <h5 className="productTitle">{title}</h5>
            <div className="priceDetails">
              <span className="new-price">
                ${Math.round(price - (discountPercentage * price) / 100)}
              </span>
              {!!discountPercentage && (
                <small className="old-price">$ {price}</small>
              )}
            </div>
            <div>
              <CiStar />
              <span>{rating}</span>
            </div>
          </div>

          <button>Add to Cart</button>
        </div>
      </div>
    </>
  );
}

export default Product;
