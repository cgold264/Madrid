// actions/restaurantActions.js
export const addAllRestaurants = (restaurants) => ({
    type: 'ADD_RESTAURANTS',
    payload: restaurants,
  });
  
export const clearAllRestaurant = () => ({
    type: 'CLEAR',
});