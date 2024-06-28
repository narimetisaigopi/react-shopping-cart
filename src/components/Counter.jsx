import React, { Component } from "react";

class Counter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      quantity: this.props.cart.filter(x => x.id === this.props.product.id)[0].quantity
    }

    this.handleRemove = this.handleRemove.bind(this);
    this.handleAdd = this.handleAdd.bind(this);
    this.newState = this.newState.bind(this);

  }

  handleAdd(product) {
    this.props.addToCart(product)
    this.newState(product.id)

  }

  handleRemove(product) {
    this.props.removeFromCart(product)
    if (!this.props.cart[product.id]) {
      this.props.changeCounter()
    } else {
      this.newState(product.id)
      // this.setState({quantity: this.props.cart[product.id].quantity})
    }
  }

  newState(id) {
    this.setState(
      {
        quantity: this.props.cart.filter(x => x.id === id)[0].quantity
      },
      function () {
        this.props.newQuantity(this.state.quantity)
      })
  }

  render() {
    let product = this.props.product
    // let type
    // if (product.quantity_type.name === 'kg') {
    //   type = ' kg'
    // } else {
    //   type = ' items'
    // }

    return (
      <div className="stepper-input">
        <div href="" className="decrement" onClick={this.handleRemove.bind(this, product)}>
          –
        </div>
        <div className="quantity">{(this.props.quantity * Number(product.quantity))}</div>
        <div href="" className="increment" onClick={this.handleAdd.bind(this, product)}>
          +
        </div>
      </div>
    );
  }
}

// const mapStateToProps = state => ({
//   cart: state.cart
// });

// const mapDispatchToProps = dispatch => ({
//   addToCart: (product) => {dispatch(addToCart(product))},
//   removeFromCart: (product) => {dispatch(removeFromCart(product))}
// });

export default Counter;
