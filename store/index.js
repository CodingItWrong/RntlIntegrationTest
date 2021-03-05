import {
  createStore as reduxCreateStore,
  applyMiddleware,
  compose,
  combineReducers,
} from 'redux';
import thunk from 'redux-thunk';
import {devToolsEnhancer} from 'redux-devtools-extension';
import todos from './todos/reducer';

const rootReducer = combineReducers({
  todos,
});

export const createStore = (state) =>
  reduxCreateStore(
    rootReducer,
    state,
    compose(applyMiddleware(thunk), devToolsEnhancer()),
  );
