import React, { useState, useContext } from "react";
import { ProductsStateContext } from "../../contexts/ProductsContext";

const ProductviewRelatedItem = (id ) => {
  const { products } = useContext(ProductsStateContext);
  console.log(`ProductviewRelatedItem id: ${JSON.stringify(id)}`);
  const product = products.find(p => p.id === id);
  console.log(`ProductviewRelatedItem product: ${JSON.stringify(id)}`)
  console.log(`ProductviewRelatedItem product: ${products.length}`);
  return product ? (
    <div className="items">
      <div className="tred-pro">
        <div className="tr-pro-img">
          <a href="product.html">
            <img
              className="img-fluid"
              src={product.image[0].url}
              alt="pro-img1"
            />
            <img
              className="img-fluid additional-image"
              src={product.image[0].url}
              alt="additional"
            />
          </a>
        </div>
        <div className="Pro-lable">
          <span className="p-text">New</span>
        </div>
        <div className="pro-icn">
          <a href="wishlist.html" className="w-c-q-icn">
            <i className="fa fa-heart" />
          </a>
          <a href="cart.html" className="w-c-q-icn">
            <i className="fa fa-shopping-bag" />
          </a>
          <a
            href="/"
            className="w-c-q-icn"
            data-bs-toggle="modal"
            data-bs-target="#exampleModal"
          >
            <i className="fa fa-eye" />
          </a>
        </div>
      </div>
      <div className="caption">
        <h3>
          <a href="product.html">Fresh organic fruit (50gm)</a>
        </h3>
        <div className="rating">
          <i className="fa fa-star c-star" />
          <i className="fa fa-star c-star" />
          <i className="fa fa-star c-star" />
          <i className="fa fa-star-o" />
          <i className="fa fa-star-o" />
        </div>
        <div className="pro-price">
          <span className="new-price">$130.00 USD</span>
        </div>
      </div>
    </div>
  ) : <div>No data</div>;
};

export default ProductviewRelatedItem;
