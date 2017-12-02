import { Provider } from 'react-redux';
import { Route, BrowserRouter } from 'react-router-dom';
import App from './containers/App/App';
// TODO: add index.js in containers folder to load containers from 1 common file;
import UsersContainer from './containers/UsersContainer/UsersContainer';
import LoginContainer from './containers/LoginContainer/LoginContainer';

// this lists out all possible routes and their respective views;
const Root = ({ store }) => (
  <Provider store={store}>
    <BrowserRouter>
      <App>
        <Route path='/login' component={LoginContainer}/>
        <Route path='/users' component={UsersContainer}/>
      </App>
    </BrowserRouter>
  </Provider>
);

export default Root;
