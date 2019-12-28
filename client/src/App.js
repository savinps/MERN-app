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
import Dashboard from './Components/dashboard/Dashboard';
import PrivateRoute from './Components/routing/PrivateRouting';
import CreateProfile from './Components/profile-forms/CreateProfile';
import EditProfile from './Components/profile-forms/EditProfile';
import AddExperience from './Components/profile-forms/AddExperience';
import AddEducation from './Components/profile-forms/AddEducation';
import Profiles from './Components/profiles/Profiles';
import Profile from './Components/profile/Profile';
import Posts from './Components/posts/Posts';

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
                <Route exact path="/profiles" component={Profiles} />
                <Route exact path="/profile/:id" component={Profile} />
                <PrivateRoute exact path= "/dashboard" component={Dashboard} />
                <PrivateRoute exact path= "/create-profile" component={CreateProfile} />
                <PrivateRoute exact path= "/edit-profile" component={EditProfile} />
                <PrivateRoute exact path= "/add-experience" component={AddExperience} />
                <PrivateRoute exact path= "/add-education" component={AddEducation} />
                <PrivateRoute exact path= "/posts" component={Posts} />
              </Switch>
            </section>
          </React.Fragment>
        </Router>
      </Provider>
    );
}

export default App;
