import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
//redux
import { Provider } from 'react-redux';
import store from './store';
import { loadUser } from './actions/auth';
import setAuthToken from './utils/setAuthToken';

import './App.css';
import Navbar from './Components/layout/Navbar';
import Landing from './Components/layout/Landing';
import Alert from './Components/layout/Alert';
import Register from './Components/auth/Register';
import Login from './Components/auth/Login';

if(localStorage.token) {
  setAuthToken(localStorage.token);
}

const App = () => {
  useEffect(
    () => {
      store.dispatch(loadUser());
    }, []);

    return(
      <Provider store={store}>
        <Router>
          <React.Fragment>
            <Navbar />
            <Route exact path='/' component={Landing} />
            <section className="container">
              <Alert />
              <Switch>
                <Route exact path="/register" component={Register} />
                <Route exact path="/login" component={Login} />
              </Switch>
            </section>
          </React.Fragment>
        </Router>
      </Provider>
    );
}

export default App;
