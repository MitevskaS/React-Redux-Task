import
  React
  from 'react';
import {
  connect
} from 'react-redux';
import
  * as postAction
  from '../../actions/postAction';
import
  Post
  from '../components/post';
import
  '../style/App.css';

class List extends React.Component {

  render() {
    return(
      <div>
        <h3>
          {this.props.posts.length} Posts
        </h3>
        {
          this.props.posts.length === 0 &&
          <div
            className="message">
            <span>There are no posts</span>
          </div>
        }
        <ul>
          {
            this.props.posts.map((post,index) =>
              <Post
                key={index}
                post={post}
                onClick={() => this.props.deletePost(index)}
              />
            )
          }
        </ul>
      </div>
    )
  }
}

/*receives the redux state and assigns it to props
to be used in the React component*/
const mapStateToProps = (state, ownProps) => {
  return {
    posts: state.posts
  }
};

/*object with the action creator function - deletePost - as property,
when passed to connect() it will automatically bind the function
- deletePost - in a call to dispatch*/
const actionCreator = {
  deletePost: (id) => postAction.deletePost(id),
};

export default connect(mapStateToProps, actionCreator)(List);
