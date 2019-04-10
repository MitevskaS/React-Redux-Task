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
  '../style/App.css';

class Form extends React.Component {

  constructor(props){
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {
      post: ''
    }
  }

  render() {
    return(
      <form
        className="flex-container"
        onSubmit={this.handleSubmit}>
        <textarea
          type="text"
          rows="3"
          onChange={this.handleChange}
          placeholder="Write your post here"
          value={this.state.post}
          required
        >
        </textarea>
        <button
          type="submit">
          SAVE
        </button>
      </form>
    )
  }

  /* this function handles change in the textarea field
  and it stores its value in state to be used later */
  handleChange(event){
    this.setState({
      post: event.target.value
    })
  }

  /*this function is called when the submit button is
  clicked and it calls the createPost action to store
  the new post in redux store */
  handleSubmit(event){
    // prevents refreshing the page
    event.preventDefault();
    /* new object -post- is defined with key "post"
    and the content of the new post as value */
    let post = {
      post: this.state.post
    }
    /* call to function that dispatches the action createPost
    with the new post object as argument*/
    this.props.createPost(post);
    // empty the text field
    this.setState({
      post: ''
    })
  }
}

/*receives the redux state and assigns it to props
to be used in the React component*/
const mapStateToProps = (state) => {
  return {
    posts: state.posts
  }
};

/*object with the action creator function - createPost - as property,
when passed to connect() it will automatically bind the function
- createPost - in a call to dispatch*/
const actionCreator = {
  createPost: (post) => postAction.createPost(post),
};

export default connect(mapStateToProps,actionCreator)(Form);
