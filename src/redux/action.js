import axios from "axios";

//edit function
export function editItem(items, id) {
  axios

    .put(`http://localhost:3000/posts/${id}`, {
      name: items.vehicle,
      time: items.startdate,
      Total_km: items.odometer,
      volume: items.volume,
      cost: items.fueltype,
    })
    .then((resp) => {
      console.log(resp.data);
    })
    .catch((error) => {
      console.log(error);
    });

  return {
    type: "EDIT_ITEM",
    payload: items,
    id: id,
  };
}

// delete function
export function deleteUser(id) {
  console.log(id);
  axios
    .delete(`http://localhost:3000/posts/${id}`)
    .then((resp) => {
      console.log(resp.data);
    })
    .catch((error) => {
      console.log(error);
    });

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
      const items = await axios.get("http://localhost:3000/posts");

      dispatch(fetchPostsSuccess(items)); //store first five posts
    } catch (e) {
      console.log(e);
    }
  };
};
