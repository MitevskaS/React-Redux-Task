import
  * as actionTypes
  from './actionTypes';

/* createPost function returns an object which
describes the action type and contains the
content of the post */
export const createPost = (post) => {
  return {
    type: actionTypes.CREATE_NEW_POST,
    post: post
  }
};

/* deletePost function returns an object which
describes the action type and contains the id
of the post that will be removed */
export const deletePost = (id) => {
  return {
    type: actionTypes.DELETE_POST,
    id: id
  }
};
