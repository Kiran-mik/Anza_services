
import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { store, persistor } from './redux/store';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';
import DashBoard from '../src/pages/dashBoard'


class App extends Component {
  Authorization = () => {
    return localStorage.getItem('token') ? true : false
  }
  render() {
    // const PrivateRoute = ({ component: Component, ...rest }) => (
    //   <Route {...rest} render={(props) => (
    //     this.Authorization() ?
    //       <Component {...props} />
    //       : <Redirect to='/' />
    //   )} />
    // );
    // const LoginCheckRoute = ({ component: Component, ...rest }) => (
    //   <Route {...rest} render={(props) => (
    //     this.Authorization()
    //       ? <Redirect to='/dashboard' />
    //       : <Component {...props} />
    //   )} />
    // );

    return (
      <Provider store={store}>
        {/* <PersistGate loading={null} persistor={persistor}> */}
          <Router>
            <Switch>
              <Route exact path="/" component={DashBoard} />
            </Switch>
          </Router>
        {/* </PersistGate> */}
      </Provider>
    );
  }
}
export default App;
