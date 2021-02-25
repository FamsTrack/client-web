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
import scheduleResolver from './resolvers/scheduleResolver'

const store = createStore(combineReducers({
  baseResolver,
  familiesResolver,
  devicesResolver,
  newsResolver,
  groupsResolver,
  scheduleResolver
}), applyMiddleware(thunk));

export default store;
