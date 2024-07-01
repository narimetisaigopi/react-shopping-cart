import React, { useContext } from "react";

import {
    CartStateContext
} from "../contexts/CartContext";

const HeaderCartCount = () => {
    const { items } = useContext(CartStateContext);

    return (
        <li style={{ cursor: 'pointer' }} className="side-wrap cart-wrap">
            <div className="shopping-widget">
                <div className="shopping-cart">
                    <a  className="cart-count">
                        <span className="cart-icon-wrap">
                            <span className="cart-icon"><i className="icon-handbag" /></span>
                            <span id="cart-total" className="bigcounter">{items.length}</span>
                        </span>
                    </a>
                </div>
            </div>
        </li>
    );
}

export default HeaderCartCount;