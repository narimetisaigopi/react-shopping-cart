import React, { useState, useContext } from "react";
import { CartDispatchContext, CartStateContext, addToCart, removeToCart, removeFromCart } from "../contexts/cart";
import { ProductsStateContext } from "../contexts/products";
import Counter from "./Counter";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

const ProductCard = ({ data }) => {
  const [, SetSelectedItem] = useState(0);
  //let SelectedItem = 1;

  let selectItems = [];
  // const [isAdded, setIsAdded] = useState(false);
  const dispatch = useContext(CartDispatchContext);
  const { items } = useContext(CartStateContext);
  let displayCounter = true;

  items.map(x => {
    if (x.quantity === 0) {
      removeFromCart(dispatch, x.id)
    }
    return x;
  });

  const { itemGroups } = useContext(ProductsStateContext);

  const [quantity, setQuantity] = useState(items.filter(x => x.id === data.id)[0]?.quantity);

  if (data.item_id && itemGroups != null) {
    var a = { ...itemGroups.find(x => x.item_id === data.item_id) };
    // var data1 = products.find(x => x.item_id === data.item_id && x.groups[Object.keys(x.groups)[0]] === SelectedItem)
    selectItems = a.groups[0].options;
    delete a.groups;
    data = { ...data, 
      // ...data1,
       ...a };
  }

  const GetCartItem = () => {
    return items.find(x => x.id === data.id);
  }

  const { image, name, price } = data;

  const handleAddToCart = () => {
    const product = { ...data, quantity: 1 };
    addToCart(dispatch, product);
    //setIsAdded(true);
    // setTimeout(() => {
    //   setIsAdded(false);
    // }, 3500);
  };

  const handleRemoveToCart = () => {
    const product = { ...data, quantity: 1 };
    removeToCart(dispatch, product);
  }

  const newQuantity = (quantity) => {
    setQuantity(items.filter(x => x.id === data.id)[0]?.quantity);
  }


  const changeCounter = (params) => {
    displayCounter = false;
  }
  //let type = ' items'
  // if (data.quantity_type.name === 'kg') {
  //   type = ' kg'
  // }

  var item = GetCartItem();

  console.log('Called');

  return (
    <div className="product">
      <Link to={`/product/${data.id}`}>
      
      <div className="product-image">
        <img src={image[0].url} alt={name} />
      </div>
      </Link>
      <h4 className="product-name">{name}</h4>
      {/* <h4 className="product-quantity">{item !== undefined ? ' ‏‏‎ ' : single}</h4> */}
      <div className='product-dropdown'>
        {selectItems.length !== 0 && (
          <select onChange={(x) => { SetSelectedItem(x.target.options.selectedIndex) }} className="form-select product-dropdown-select" aria-label="Default select example">
            {
              selectItems.map(x => <option key={x} >{x}</option>)
            }
          </select>
        )
        }
      </div>
      <p className="product-price">{price * (items.filter(x => x.id === data.id)[0]?.quantity ? items.filter(x => x.id === data.id)[0]?.quantity : 1)}</p>
      <div className="product-action">
        {(item === undefined && displayCounter === true) ? <button type="button" onClick={handleAddToCart}>ADD TO CART</button> : (<Counter quantity={quantity === item.quantity ? quantity : item.quantity} newQuantity={newQuantity} removeFromCart={handleRemoveToCart} addToCart={handleAddToCart} cart={items} product={data} changeCounter={changeCounter} fromCart={false}></Counter>)}
      </div>
    </div >
  );
};

export default ProductCard;
