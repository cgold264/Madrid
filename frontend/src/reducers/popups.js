// reducers/restaurant.js
const initialState = {
    inputRestaurant: false,
    itemPopup: false,
    loginPopup: false
  };
  
  const popupsReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'FALSE_LOGIN_POPUP':
        return { ...state, loginPopup: false};
      case 'TRUE_LOGIN_POPUP':
        return { ...state, loginPopup: true};
      case 'FALSE_INPUT_RESTAURANT':
        return { ...state, inputRestaurant: false};
      case 'TRUE_INPUT_RESTAURANT':
        return { ...state, inputRestaurant: true};
      case 'FALSE_INPUT_ITEM':
          return { ...state, itemPopup: false};
      case 'TRUE_INPUT_ITEM':
          return { ...state, itemPopup: true};
      case 'CLEAR_ALL':
        return {
            inputRestaurant: false,
            itemPopup: false
        }
      default:
        return state;
    }
  };
  
  export default popupsReducer;
  