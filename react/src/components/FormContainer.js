import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addProduct } from '../actions';

import { Link } from 'react-router-dom';

class FormContainer extends Component {
  state = { term: '' };

  hundleSubmit = e => {
    e.preventDefault();
    
    this.props.addProduct(this.state.term);
  }

  render() { 
    return ( 
      <div>
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
      </div>
    );
  }
}
 
export default connect(null, { addProduct })(FormContainer);