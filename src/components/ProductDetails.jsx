import React from 'react';
import PropTypes from 'prop-types';

class ProductDetails extends React.Component {
  constructor(props) {
    super(props);
    this.infoState = this.infoState.bind(this);
    const { match: { params: { id } } } = this.props;
    this.state = {
      productId: id,
      productInfo: [],
    };
  }

  async componentDidMount() {
    const { productId } = this.state;
    const fetchedInfo = await fetch(`https://api.mercadolibre.com/items?ids=${productId}`);
    fetchedInfo.json().then((r) => this.infoState(r[0].body));
  }

  infoState(array) {
    this.setState({
      productInfo: array,
    });
    console.log(array);
  }

  render() {
    const { productInfo } = this.state;
    console.log(productInfo.title);
    return (
      <main>
        <h1 data-testid="product-detail-name">{ productInfo.title }</h1>
        <img src={ productInfo.thumbnail } alt="Imagem do produto" />
        <p>{ productInfo.price }</p>
        <h3>Especificacoes Tecnicas</h3>
      </main>
    );
  }
}

ProductDetails.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
  }).isRequired,
};

export default ProductDetails;
