import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import classNames from "classnames";
import {
  CartStateContext,
  CartDispatchContext,
  removeFromCart,
  toggleCartPopup
} from "../contexts/CartContext";

import { ProductsStateContext } from '../contexts/ProductsContext';
import { Link } from "react-router-dom/cjs/react-router-dom.min";

const CartPreview = () => {
  const { items, isCartOpen } = useContext(CartStateContext);
  const dispatch = useContext(CartDispatchContext);
  const { products, itemGroups } = useContext(ProductsStateContext);
  const history = useHistory();

  const handleRemoveCart = (cartId) => {
      removeFromCart(dispatch,cartId);
  }

  function handleClick(id) {
    history.push(`/product/${id}`);
  }

  const handleToggleCartPopup = () => {
    toggleCartPopup(dispatch);
}

  if (products === null || itemGroups === null) {
    return (
      <div className="mini-cart">
        <a href="javascript:void(0)" className="shopping-cart-close"><i className="ion-close-round" /></a>
        <div className="cart-item-title">
          <p>
            <span className="cart-count-desc">There are</span>
            &nbsp;<span className="cart-count-item bigcounter">{items.length}</span>&nbsp;
            <span className="cart-count-desc">Products</span>
          </p>
        </div>
        <ul className="cart-item-loop">
        </ul>
        <ul className="subtotal-title-area">
          <li className="subtotal-info">
            <div className="subtotal-titles">
              <h6>Sub total:
              </h6>
              <span className="subtotal-price">{CalculateSubTotal()}</span>
            </div>
          </li>
          <li className="mini-cart-btns">
            <div className="cart-btns">
              <a href="cart.html" className="btn btn-style2">View cart</a>
              <a href="checkout-1.html" className="btn btn-style2">Checkout</a>
            </div>
          </li>
        </ul>
      </div>
    );
  }
  
  function CalculateSubTotal() {
    var SubTotal = 0;

    items.map((x) => {
      SubTotal = SubTotal + (x.price * x.quantity);
    });
    return '₹' + SubTotal;
  }

  return (
    <div className="mini-cart">
      <a href="javascript:void(0)" className="shopping-cart-close"><i className="ion-close-round" /></a>
      <div className="cart-item-title">
        <p>
          <span className="cart-count-desc">There are</span>
          &nbsp;<span className="cart-count-item bigcounter">{items.length}</span>&nbsp;
          <span className="cart-count-desc">Products</span>
        </p>
      </div>
      <ul className="cart-item-loop">
        {items.map((product) => {
          var item1 = itemGroups?.find(x => x.item_id === product.item_id);
          return <a onClick={(e)=> {
            handleClick(product.id);
          }} href="javascript:void(0)"> <li className="cart-item">
            <div className="cart-img">
                <img src={product.image[0].url} alt="cart-image" className="img-fluid" />
            </div>
            <div className="cart-title">
              {/* <h6><a href="product.html">{product.name + (item1 !== undefined ? ' - ' + item1.groups[0].options[product.groups[Object.keys(product.groups)[0]]] : '')}</a></h6> */}
              <h6>{product.name}</h6>
              <div className="cart-pro-info">
                <div className="cart-qty-price">
                  <span className="quantity">{products !== null ? `${product.quantity + ' x ₹' + product.price + ' = '}` : `${product.quantity} ${product.quantity > 1 ? "Nos." : "No."}`}</span>
                  &nbsp;<span className="price-box">{'₹' + (product.price * product.quantity)}</span>
                </div>
                <div className="delete-item-cart">
                  <button onClick={(e) => handleRemoveCart(product.id)}><i className="icon-trash icons" /></button>
                </div>
              </div>
            </div>
          </li>
          </a>
        })}
      </ul>
      <ul className="subtotal-title-area">
        <li className="subtotal-info">
          <div className="subtotal-titles">
            <h6>Sub total:
            </h6>
            <span className="subtotal-price">{CalculateSubTotal()}</span>
          </div>
        </li>
        <li className="mini-cart-btns">
          <div className="cart-btns">
            <a href="cart.html" className="btn btn-style2">View cart</a>
            <a href="checkout-1.html" className="btn btn-style2">Checkout</a>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default CartPreview;
