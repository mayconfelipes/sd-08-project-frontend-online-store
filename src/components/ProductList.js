import React from 'react';
import PropTypes from 'prop-types';
import ProductCard from './ProductCard';

class ProductList extends React.Component {
  constructor() {
    super();
    this.state = {
      productsCart: [],
    };
    this.handleClickCart = this.handleClickCart.bind(this);
  }

  handleClickCart(title, price, id) {
    this.setState(({ productsCart }) => ({
      productsCart: [...productsCart, { title, price, id }],
    }), () => {
      const { productsCart } = this.state;
      localStorage.setItem('productsCart', JSON.stringify(productsCart));
    });
  }

  render() {
    const { products, query, categoryID } = this.props;
    return (
      <div>
        { products
          .map((product) => (<ProductCard
            onClick={ this.handleClickCart }
            key={ product.id }
            product={ product }
            query={ query }
            category={ categoryID }
          />))}
      </div>
    );
  }
}

ProductList.propTypes = {
  products: PropTypes.arrayOf(PropTypes.object).isRequired,
  query: PropTypes.string.isRequired,
  categoryID: PropTypes.string.isRequired,
};

export default ProductList;
