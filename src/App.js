import
  React
  from 'react';
import
  './app/style/App.css';
import
  Form
  from './app/containers/addPost';
import
  List
  from './app/containers/listPosts';

export default class App extends React.Component {
  render() {
    return (
      <div
        className="container">
        <List/>
        <Form/>
      </div>
    );
  }
}
