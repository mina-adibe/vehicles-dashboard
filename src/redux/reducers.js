const initialState = { items: [] };

const itemReducer = (state = initialState, action) => {
  switch (action.type) {
    //fetch data async
    case "FETCH_POSTS_SUCCESS":
      console.log("????", action.payload.items);
      return { ...state, items: action.payload.items.data };

    //delete item
    case "DELETE_ITEM":
      const arr = state.items.filter((post) => post.id !== action.payload);
      //console.log(state.ite, action.payload);
      return { ...state, items: [...arr] };

    default:
      return state;
  }
};
export default itemReducer;
