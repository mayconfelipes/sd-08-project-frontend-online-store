import React from 'react';
import { Link } from 'react-router-dom';
import * as api from './services/api';

import AddButtonCart from './AddButtonCart';

class LandingPage extends React.Component {
  constructor() {
    super();

    this.state = {
      categoriesList: [],
      categoryId: '',
      query: '',
      productList: [],
    };

    this.handleChange = this.handleChange.bind(this);
    this.getCategoriesList = this.getCategoriesList.bind(this);
    this.getProductsFromAPI = this.getProductsFromAPI.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    this.getCategoriesList();
  }

  handleChange({ target }) {
    this.setState({
      query: target.value,
    });
  }

  async handleClick({ target }) {
    this.setState({
      categoryId: target.name,
    }, () => {
      const { categoryId, query } = this.state;
      this.getProductsFromAPI(categoryId, query);
    });
  }

  async getCategoriesList() {
    const listCategories = await api.getCategories();
    this.setState({
      categoriesList: listCategories,
    });
  }

  async getProductsFromAPI(categoryId, query) {
    const apiResponse = await api.getProductsFromCategoryAndQuery(categoryId, query);
    const productList = await apiResponse.results;
    this.setState({
      productList,
    });
  }

  renderCategoryList(categoriesList) {
    return (
      <div>
        {
          categoriesList
            .map((category) => (
              <button
                type="button"
                key={ category.id }
                name={ category.id }
                data-testid="category"
                onClick={ this.handleClick }
              >
                { category.name}
              </button>))
        }
      </div>
    );
  }

  renderProductList(productList) {
    return (
      <div>
        { productList.map((product) => (
          <section
            key={ product.id }
            data-testid="product"
          >
            <p>{product.title}</p>
            <p>
              R$
              {product.price}
            </p>
            <img src={ product.thumbnail } alt={ product.title } />
            <Link
              to={ {
                pathname: '/product-details',
                search: '?sort=name',
                hash: '#the-hash',
                state: { product },
              } }
              data-testid="product-detail-link"
            >
              <button type="button">Detalhes</button>
            </Link>
            <AddButtonCart />
          </section>
        ))}
      </div>
    );
  }

  render() {
    const { categoriesList, categoryId, query, productList, shoppingCart } = this.state;
    return (
      <div>
        <button
          type="button"
          data-testid="query-button"
          onClick={ () => this.getProductsFromAPI(categoryId, query) }
        >
          Pesquisar
        </button>
        <input
          type="text"
          data-testid="query-input"
          value={ query }
          onChange={ this.handleChange }
        />
        <Link
          to={ { pathname: '/shopping-cart', state: { shoppingCart } } }
          data-testid="shopping-cart-button"
        >
          Carrinho de Compras
        </Link>
        <h1 data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </h1>
        { this.renderCategoryList(categoriesList) }
        { this.renderProductList(productList) }
      </div>
    );
  }
}

export default LandingPage;
