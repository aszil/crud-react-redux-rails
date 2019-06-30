import React, { Component } from 'react';

class FormContainer extends Component {
  state = { term: '' };

  hundleSubmit = e => {
    e.preventDefault();
    
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
      </div>
    );
  }
}
 
export default FormContainer;