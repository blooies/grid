import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import App from './containers/App/App';
import UsersContainer from './containers/UsersContainer/UsersContainer';
import LoginContainer from './containers/LoginContainer/LoginContainer';

// this lists out all possible routes and their respective views;
const Root = ({ store }) => (
  <Provider store={store}>
    <Router>
      <div>
        <Route
          path="/login"
          component={LoginContainer}
        />
        <Route
          path="/users"
          component={UsersContainer}
        />
      </div>
    </Router>
  </Provider>
);

Root.propTypes = {
  store: PropTypes.object.isRequired
};

export default Root;
