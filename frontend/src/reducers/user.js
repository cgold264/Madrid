// reducers/user.js
const initialState = {
    userName: null,
    password: null,
    userLatitude: null,
    userLongitude: null
  };
  
  const userReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'SET_USER':
        return {
          ...state,
          userName: action.payload.userName,
          password: action.payload.password,
        };
      case 'SET_LOCATION':
        return {
          ...state,
          userLatitude: action.payload.latitude,
          userLongitude: action.payload.longitude,
        };
      case 'CLEAR_USER':
        return {
          userName: null,
          password: null,
          userLatitude: null,
          userLongitude: null,
        };
      default:
        return state;
    }
  };
  
  export default userReducer;
  