import
  React
  from 'react';
import
  ReactDOM
  from 'react-dom';
import
  './app/style/index.css';
import
  App
  from './App';
import
  * as serviceWorker
  from './serviceWorker';
import {
  Provider
} from 'react-redux';
import
  configureStore
  from './store/configureStore';

// function that creates the store which is then passed as prop in Provider
const store = configureStore();

/* The <Provider> from the react-redux library is used
to wrap the App component and make the redux store
available to the context of the Application */
ReactDOM.render(
  <Provider
    store={store}>
    <App />
  </Provider>, document.getElementById('root'));

serviceWorker.unregister();
