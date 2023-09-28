// reducers/restaurant.js
const initialState = {
    name: null,
    type: null,
    price: null,
    description: null,
    latitude: null,
    longitude: null,
  };
  
  const restaurantReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'ADD':
        return { ...state, name: state.name, type: state.type, price: state.price, description: state.description, latitude: state.latitude, longitude: state.longitude};
      case 'CLEAR':
        return {
          name: null,
          type: null, 
          price: null,
          description: null,
          latitude: null,
          longitude: null
        }
      default:
        return state;
    }
  };
  
  export default restaurantReducer;
  