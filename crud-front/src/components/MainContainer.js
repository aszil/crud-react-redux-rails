import React from 'react';
import { Link } from 'react-router-dom';

import { connect } from 'react-redux';
import { fetchProducts, deleteProduct } from '../actions';

class MainContainer extends React.Component {
  componentDidMount() {
    this.props.fetchProducts();
  }

  deleteProduct = (id, i) => {
    this.props.deleteProduct(id, i);
  }

  showProducts = () => {
    return this.props.products.map((product, i) => {
      return (
        <ul key={i}>
          <li>
            {product.product}
            <Link to={`/edit/${product.id}`}>
              <button>編集</button>
            </Link>
            <button onClick={() => this.deleteProduct(product.id, i)}>
              削除
            </button>
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
 
export default connect(mapStateToProps, { fetchProducts, deleteProduct })(MainContainer);
