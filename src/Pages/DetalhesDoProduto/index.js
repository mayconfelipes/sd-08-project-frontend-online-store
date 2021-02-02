import React, { Component } from 'react';
import PropTypes from 'prop-types';
import BotaoAdiciona from '../../Components/BotaoAdiciona';
import BotaoCarrinho from '../../Components/BotaoCarrinho';

import FormularioAvaliaçao from '../../Components/FormularioAvaliaçao';

export default class DetalhesDoProduto extends Component {

  render() {
    const { location: { state: { product } } } = this.props;
    const { title, subtitle, price,
      condition, warranty, thumbnail } = product;
    return (
      <>
        <img src={ `${thumbnail}` } alt="product" />
        <p data-testid="product-detail-name">{title}</p>
        <p>{subtitle}</p>
        <p>{price}</p>
        <p>{condition}</p>
        <p>{warranty}</p>
<<<<<<< HEAD
        <button
          type="button"
          data-testid="product-detail-add-to-cart"
          /* onClick={ addProduct } */
        >
          Adicionar ao Carrinho
        </button>
=======
        <BotaoAdiciona product={ product } testId="product-detail-add-to-cart" />
        <BotaoCarrinho />
        <FormularioAvaliaçao />
>>>>>>> c4dbebc61196f24401a32bb9e6e9a897e7786d1a
      </>
    );
  }
}

DetalhesDoProduto.propTypes = {
  location: PropTypes.shape({
    state: PropTypes.shape({
      product: PropTypes.shape({
        title: PropTypes.string,
        subtitle: PropTypes.string,
        price: PropTypes.number,
        condition: PropTypes.string,
        warranty: PropTypes.string,
        thumbnail: PropTypes.string,
      }),
    }),
  }).isRequired,
};
