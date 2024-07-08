import React, { useState, useEffect, useContext } from "react";
import { ProductsStateContext } from "../../contexts/ProductsContext";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

const ProductviewRelatedItem = ({ id }) => {
  const { products } = useContext(ProductsStateContext);
  const [product, setProduct] = useState(null);

  useEffect(() => {
    // Find the product with matching id from products array
    const foundProduct = products.find(product => `${product.id}` === id);
    // Set the found product to state
    if (foundProduct) {
      setProduct(foundProduct);
    }
  }, [id, products]);

  return product ? (
    <div className="items">
      <div className="tred-pro">
        <div className="tr-pro-img">
          <Link to={`/product/${id}`}>
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
          </Link>
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
          <a href="product.html">{product.name}</a>
        </h3>
        <div className="rating">
          <i className="fa fa-star c-star" />
          <i className="fa fa-star c-star" />
          <i className="fa fa-star c-star" />
          <i className="fa fa-star-o" />
          <i className="fa fa-star-o" />
        </div>
        <div className="pro-price">
          <span className="new-price">${product.price} USD</span>
        </div>
      </div>
    </div>
  ) : (
    <div>No data {id}</div>
  );
};

export default ProductviewRelatedItem;
