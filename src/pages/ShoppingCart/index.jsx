import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class ShoppingCart extends React.Component {
  render() {
    const { location: { state: { shoppingCart } } } = this.props;
    return (
      <div>
        <h4 data-testid="shopping-cart-empty-message">
          Seu carrinho está vazio
        </h4>
        { shoppingCart.map((item) => (
          <div key={ item.id }>
            <p data-testid="shopping-cart-product-name">{item.title}</p>
            <p data-testid="shopping-cart-product-quantity">{1}</p>
            <Link to="/checkout" data-testid="checkout-products"> Comprar </Link>
          </div>
        )) }
      </div>
    );
  }
}

ShoppingCart.propTypes = {
  location: PropTypes.shape({
    state: PropTypes.shape({
      shoppingCart: PropTypes.arrayOf(PropTypes.object),
    }),
  }).isRequired,
};

export default ShoppingCart;
