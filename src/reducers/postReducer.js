import
  * as actionTypes
  from '../actions/actionTypes';

export default (state = [], action) => {
  switch (action.type){
    case actionTypes.CREATE_NEW_POST:
      // returns the original state with the new post object
      return [
        ...state,
        action.post,
    ];
    case actionTypes.DELETE_POST:
      /* to prevent mutating the original state only filter
      posts and return new array without the element with id === action.id */
      return state.filter((data, id) => id !== action.id)
    default:
      return state;
  }
};
