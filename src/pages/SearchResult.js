import React from 'react';
import PropTypes from 'prop-types';
import ResultCard from './ResultCard';

class SearchResult extends React.Component {
  render() {
    const { queryResult, search } = this.props;

    if (search === false) {
      return <div>Digite algum termo de pesquisa ou escolha uma categoria.</div>;
    }
    if (queryResult.length === 0) return <div>Nenhum produto foi encontrado</div>;
    return (
      queryResult.map(
        ((product) => (<ResultCard
          key={ product.id }
          product={ product }
        />)),
      )
    );
  }
}

SearchResult.defaultProps = {
  queryResult: [],
};

SearchResult.propTypes = {
  queryResult: PropTypes.arrayOf(Array),
};

export default SearchResult;
