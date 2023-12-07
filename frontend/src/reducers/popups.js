// reducers/restaurant.js
const initialState = {
  inputPopup: false,
  itemPopup: false,
  loginPopup: false,
  deletePopup: false,
};
  
  const popupsReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'FALSE_LOGIN_POPUP':
        return { ...state, loginPopup: false };
      case 'TRUE_LOGIN_POPUP':
        return { ...state, loginPopup: true };
      case 'FALSE_INPUT_POPUP':
        return { ...state, inputPopup: false };
      case 'TRUE_INPUT_POPUP':
        return { ...state, inputPopup: true };
      case 'FALSE_INPUT_ITEM':
        return { ...state, itemPopup: false };
      case 'TRUE_INPUT_ITEM':
        return { ...state, itemPopup: true };
      case 'FALSE_DELETE_ITEM':
        return { ...state, deletePopup: false };
      case 'TRUE_DELETE_ITEM':
        return { ...state, deletePopup: true };
      case 'CLEAR_ALL':
        return {
          inputRestaurant: false,
          itemPopup: false,
          loginPopup: false,
          deletePopup: false,
        };
      default:
        return state;
    }
  };
  
  export default popupsReducer;
  