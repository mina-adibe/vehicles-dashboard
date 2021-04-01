const initialState = { items: [] };

const itemReducer = (state = initialState, action) => {
  switch (action.type) {
    //fetch data async
    case "FETCH_POSTS_SUCCESS":
      return { ...state, items: action.payload.items.data };

    //delete item
    case "DELETE_ITEM":
      const arr = state.items.filter((post) => post.id !== action.payload);
      return { ...state, items: [...arr] };

    //edit user
    case "EDIT_ITEM":
      const newstate = state.items.map((item) =>
        item.id === action.id
          ? {
              ...item,
              name: action.payload.vehicle,
              time: action.payload.startdate,
              Total_km: action.payload.odometer,
              volume: action.payload.volume,
              cost: action.payload.fueltype,
            }
          : item
      );
      return { ...state, items: [...newstate] };

    default:
      return state;
  }
};
export default itemReducer;
