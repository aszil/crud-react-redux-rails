import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updateProduct } from '../actions';

import { Link } from 'react-router-dom';


class EditContainer extends Component {
  state = { term: '' };

  componentDidMount() {
    const { id } = this.props.match.params;
    const product = this.props.products.find(product => product.id === Number(id));

    this.setState({ term: product.product });
  }

  hundleSubmit = e => {
    e.preventDefault();
    const { id } = this.props.match.params;

    this.props.updateProduct(id, this.state.term);
  }

  render() {
    return (
      <>
        <form onSubmit={this.hundleSubmit}>
          <input 
            type="text" 
            value={this.state.term} 
            onChange={e => this.setState({ term: e.target.value })}
          />
        </form>
        <Link to="/">
          トップへ
        </Link>
      </>
    );
  }
}

const mapStateToProps = state => {
  return {
    products: state.products.products,
  };
};
 
export default connect(mapStateToProps, { updateProduct })(EditContainer);