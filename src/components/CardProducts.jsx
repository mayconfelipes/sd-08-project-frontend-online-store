import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './CardProducts.css';

class CardProducts extends React.Component {
  render() {
    const { product, addCart } = this.props;
    const { thumbnail, price, title, id } = product;

    return (
      <div className="productCard">
        <div className="imgDiv">
          <img src={ thumbnail } alt="Thumb" />
        </div>
        <div className="textDiv">
          <p>
            R$
            { price }
          </p>
          <h4 data-testid="product-detail-name">{ title }</h4>
          <Link
            to={ {
              pathname: `/${id}`,
              state: { product } } }
            data-testid="product-detail-link"
          >
            More Info
          </Link>
          <button
            data-testid="product-add-to-cart"
            onClick={ () => addCart(product) }
            type="button"
          >
            Adicionar ao carrinho
          </button>
        </div>
      </div>
    );
  }
}

CardProducts.propTypes = {
  product: PropTypes.shape({
    thumbnail: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
  }).isRequired,
  addCart: PropTypes.func.isRequired,
};

export default CardProducts;
