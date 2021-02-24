import {
  createStore,
  combineReducers,
  applyMiddleware
} from 'redux';
import thunk from 'redux-thunk';
import baseResolver from './resolvers/baseResolver';
import familiesResolver from './resolvers/familiesResolver';
import devicesResolver from './resolvers/devicesResolver';
import newsResolver from './resolvers/newsResolver';
import groupsResolver from './resolvers/groupsResolver';

const store = createStore(combineReducers({
  baseResolver,
  familiesResolver,
  devicesResolver,
  newsResolver,
  groupsResolver
}), applyMiddleware(thunk));

export default store;
