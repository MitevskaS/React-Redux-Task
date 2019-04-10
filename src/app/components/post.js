import
  React
  from 'react';
import
  '../style/App.css';

export default class Post extends React.Component {

  render(){
    const {
      post,
      onClick
    } = this.props;
    return (
      <li
        className="flex-container">
        <span>
          {post.post}
        </span>
        <button
          type="button"
          onClick={onClick}>
          Delete
        </button>
      </li>
    )
  }
}
