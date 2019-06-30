import React from 'react';
import { Link } from 'react-router-dom';

import { connect } from 'react-redux';
import { fetchProducts } from '../actions';

class MainContainer extends React.Component {
  componentDidMount() {
    this.props.fetchProducts();
  }

  showProducts = () => {
    return this.props.products.map(product => {
      return (
        <ul key={product.id}>
          <li>
            {product.product}
          </li>
        </ul>
      );
    });
  }

  render() {
    return (
      <>
        <div>
          {this.showProducts()}
        </div>
        <Link to="/new">
          追加
        </Link>
      </>
    );
  }
}

const mapStateToProps = state => {
  return {
    products: state.products.products
  }
}
 
export default connect(mapStateToProps, { fetchProducts })(MainContainer);
