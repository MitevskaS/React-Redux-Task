import {
  createStore
} from 'redux';
import
  rootReducer
  from '../reducers';

 // create the store and pass the rootReducer to it.
export default function configureStore() {
  return createStore(rootReducer);
}
