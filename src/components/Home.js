import React from 'react';
import * as api from '../services/api';

class Home extends React.Component {
  constructor() {
    super();

    this.state = {
      categories: [],
    };
  }

  componentDidMount() {
    api.getCategories().then((categories) => (
      this.setState({
        categories,
      })
    ));
  }

  render() {
    const { categories } = this.state;
    return (
      <div>
        <ul>
          {categories.map((cat) => (
            <li
              data-testid="category"
              key={ cat.name }
            >
              { cat.name }
            </li>))}
        </ul>
      </div>
    );
  }
}

export default Home;
