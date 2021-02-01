import React from 'react';
import Rating from '@material-ui/lab/Rating';

class ProductEvaluation extends React.Component {
  render() {
    return (
      <form>
        <h3>Avaliação do Produto</h3>
        <Rating name="size-large" defaultValue={ 3 } size="large" />
        <div>
          <label htmlFor="email-field">
            E-mail
            <input id="email-field" type="email" />
          </label>
        </div>
        <div>
          <label htmlFor="evaluation">
            Avaliação
            <input
              id="evaluation"
              type="textArea"
              data-testid="product-detail-evaluation"
            />
          </label>
        </div>
      </form>
    );
  }
}

export default ProductEvaluation;
