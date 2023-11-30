// reducers/restaurant.js
const initialState = {
    restaurantList: [],
    establishmentList: [],
    barsList: []
  };
  
  const dataListsReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_ESTABLISHMENTS':
          return {...state, establishmentList: action.payload}
          case 'ADD_SINGLE_ESTABLISHMENT':
            return {...state, establishmentList: [...state.establishmentList, action.payload]}
        case 'ADD_RESTAURANTS':
            return {...state, restaurantList: action.payload}
        case 'ADD_BARS':
          return {...state, barsList: action.payload}
        case 'ADD_SINGLE_RESTAURANT':
            return {...state, restaurantList: [...state.restaurantList, action.payload]}
      default:
        return state;
    }
  };
  
  export default dataListsReducer;
  