// reducers/restaurant.js
const initialState = {
    restaurantList: []
  };
  
  const dataListsReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_RESTAURANTS':
            return {...state, restaurantList: action.payload}
        case 'ADD_SINGLE_RESTAURANT':
            return {...state, restaurantList: [...state.restaurantList, action.payload]}
      default:
        return state;
    }
  };
  
  export default dataListsReducer;
  