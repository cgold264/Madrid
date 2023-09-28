// reducers/restaurant.js
const initialState = {
    inputRestaurant: false,
  };
  
  const popupsReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'FALSE_INPUT_RESTAURANT':
        return { ...state, inputRestaurant: false};
    case 'TRUE_INPUT_RESTAURANT':
        return { ...state, inputRestaurant: true};
      case 'CLEAR_ALL':
        return {
            inputRestaurant: false,
        }
      default:
        return state;
    }
  };
  
  export default popupsReducer;
  