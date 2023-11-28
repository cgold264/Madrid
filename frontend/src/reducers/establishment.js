// reducers/establishments.js
const initialState = {
    name: null,
    description: null,
    latitude: null,
    longitude: null,
    website: null,
    telephone: null,
    submitter: null
  };
  
  const establishmentReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'ADD':
        return { ...state,
            price: state.price, 
            description: state.description, 
            latitude: state.latitude, 
            longitude: state.longitude,
            website: state.website,
            telephone: state.telephone,
            submitter: state.submitter
            };
      case 'CLEAR':
        return {
            name: null,
            description: null,
            latitude: null,
            longitude: null,
            website: null,
            telephone: null,
            submitter: null
        }
      default:
        return state;
    }
  };
  
  export default establishmentReducer;
  