import {
  combineReducers
} from 'redux';
import
  posts
  from './postReducer';

/* combineReducers helps combining different reducing functions
in a single reducing function that can be passed to createStore
In this case there is only one reducer - posts - and it is
turned into an object with the reducing function as value */
export default combineReducers({
    posts: posts
});
