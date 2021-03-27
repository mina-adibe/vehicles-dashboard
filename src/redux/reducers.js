const itemReducer = (state = [], action) => {
  switch (action.type) {
    //fetch data async
    case "FETCH_POSTS_SUCCESS":
      return action.payload.items;

    //delete item
    case "DELETE_ITEM":
      return state.filter((post) => post.id !== action.id);

    //edit user
    case "EDIT_ITEM":
      return state.map((item) => {
        if (item.id === action.id) {
          return {
            ...item,
            username: action.data.username,
            phonenumber: action.data.phonenumber,
            country: action.data.country,
            email: action.data.email,
          };
        } else return item;
      });
    default:
      return state;
  }
};
export default itemReducer;
