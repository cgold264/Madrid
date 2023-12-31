// reducers/restaurant.js
const initialState = {
  homePage: null,
  restaurantsPage: true,
  barsPage: null,
  profilePage: null,
  excursionsPage: null,
};
  
  const dataListsReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'SET_HOME_PAGE':
        return {
          homePage: true,
          restaurantsPage: null,
          barsPage: null,
          profilePage: null,
          excursionsPage: null,
        };
      case 'SET_RESTAURANTS_PAGE':
        return {
          homePage: null,
          restaurantsPage: true,
          barsPage: null,
          profilePage: null,
          excursionsPage: null,
        };
      case 'SET_BARS_PAGE':
        return {
          homePage: null,
          restaurantsPage: null,
          barsPage: true,
          profilePage: null,
          excursionsPage: null,
        };
      case 'SET_PROFILE_PAGE':
        return {
          homePage: null,
          restaurantsPage: null,
          barsPage: null,
          profilePage: true,
          excursionsPage: null,
        };
      case 'SET_EXCURSIONS_PAGE':
        return {
          homePage: null,
          restaurantsPage: null,
          barsPage: null,
          profilePage: null,
          excursionsPage: true,
        };
      case 'CLEAR_PAGES':
        return {
          homePage: null,
          restaurantsPage: null,
          barsPage: null,
          profilePage: null,
        };
      default:
        return state;
    }
  };
  
  export default dataListsReducer;
  