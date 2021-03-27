import axios from "axios";

export function editItem(id) {
  return {
    type: "EDIT_ITEM",
    payload: id,
  };
}

export function deleteUser(id) {
  return {
    type: "DELETE_ITEM",
    payload: id,
  };
}

//synchronous action creator
const fetchPostsSuccess = (items) => ({
  type: "FETCH_POSTS_SUCCESS",
  payload: { items },
});
/*asynchronous thunk action creator
  calls the api, then dispatches the synchronous action creator
*/

export const fetchPosts = () => {
  return async (dispatch) => {
    try {
      let items = await axios.get("http://localhost:3000/posts");

      dispatch(fetchPostsSuccess(items)); //store first five posts
    } catch (e) {
      console.log(e);
    }
  };
};
