import React from 'react';

import { Route, Switch, Router } from 'react-router-dom';
import history from './history';

import MainContainer from './components/MainContainer';
import FormContainer from './components/FormContainer';
import EditContainer from './components/EditContainer';

class App extends React.Component {
  render() {
    return (
      <Router history={history}>
        <Switch>
          <Route path="/" exact component={MainContainer} />
          <Route path="/new" component={FormContainer}  />
          <Route path="/edit/:id" component={EditContainer} />
        </Switch>
      </Router>
    );
  }
}

export default App;