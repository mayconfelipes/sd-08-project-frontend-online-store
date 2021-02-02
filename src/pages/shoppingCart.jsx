import React, { Component } from 'react';
import Header from '../components/Header';
import '../styles/shoppingCartStyle.css';
import * as localStorage from '../services/localStorage';
import { Link } from 'react-router-dom';

class ShoppingCart extends Component {
  constructor() {
    super();
    this.productsList = this.productsList.bind(this);
    this.updateState = this.updateState.bind(this);

    this.state = {
      cart: [],
    };
  }

  componentDidMount() {
    this.updateState();
  }

  updateState() {
    const cart = localStorage.readCart();
    this.setState({ cart });
  }

  emptyMessage() {
    return (
      <p data-testid="shopping-cart-empty-message">
        Seu carrinho está vazio.
      </p>
    );
  }

  productsList() {
    const { cart } = this.state;
    return (
      <div className="cart-container">
        <Header />
        <div className="cart-products">
          {cart.map(({ price, amount, title, id, thumbnail }) => (
            <div className="product" key={id} data-testid="shopping-cart-product-name">
              <Link to={`/${id}`}>
                <img src={thumbnail} alt={title} />
                <h1>{title}</h1>
              </Link>
              <h2 className="product-qtd" data-testid="shopping-cart-product-quantity">
                {`Quantidade: ${amount}`}
                <p>
                  {`Preço unitário: R$ ${price}`}
                </p>
                <p>
                  {`Total: R$ ${price * amount}`}
                </p>
              </h2>
            </div>
          ))}
        </div>
      </div>
    );
  }

  render() {
    const { cart } = this.state;
    let cartItemsLength;
    if (cart) {
      cartItemsLength = cart.length;
    } else cartItemsLength = 0;

    if (cartItemsLength) {
      return (this.productsList());
    }

    return (
      <div>
        <Header />
        { this.emptyMessage()}
      </div>
    );
  }
}

export default ShoppingCart;
