import {
  createStore,
  combineReducers,
  applyMiddleware
} from 'redux';
import thunk from 'redux-thunk';
import baseResolver from './resolvers/baseResolver';
import familiesResolver from './resolvers/familiesResolver';

const store = createStore(combineReducers({
  baseResolver,
  familiesResolver
}), applyMiddleware(thunk));

export default store;
