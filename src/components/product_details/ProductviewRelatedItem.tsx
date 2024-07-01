import React, { useState, useContext } from "react";
import { ProductsStateContext } from "../../contexts/ProductsContext";

const ProductviewRelatedItem = (id : number) => {
    const { products } = useContext(ProductsStateContext);
    const product = products.find((p : any) => p.id.toString() === id.toString());
  return (
    <div className="items">
      <div className="tred-pro">
        <div className="tr-pro-img">
          <a href="product.html">
            <img
              className="img-fluid"
              src="image/pro/pro-img-1.jpg"
              alt="pro-img1"
            />
            <img
              className="img-fluid additional-image"
              src="image/pro/pro-img-01.jpg"
              alt="additional image"
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
            href="javascript:void(0)"
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
  );
};

export default ProductviewRelatedItem;
