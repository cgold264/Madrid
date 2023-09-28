// reducers/user.js
const initialState = {
    userLatitude: null,
    userLongitude: null
  };
  
  const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_LOCATION':
            return {...state, userLatitude: action.payload.latitude, userLongitude: action.payload.longitude}
      default:
        return state;
    }
  };
  
  export default userReducer;
  