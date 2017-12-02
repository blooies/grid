import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { render } from 'react-dom';
import rootReducer from './reducers';
import Root from './root';

function createFinalStore(initialState) {
  return createStore(
    rootReducer,
    initialState,
    applyMiddleware(thunk)
  )
}

const store = createFinalStore();

render(
  <Root store={store} />,
  document.getElementById('app')
);
