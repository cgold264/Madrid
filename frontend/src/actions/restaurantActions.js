// actions/restaurantActions.js
export const addAllRestaurants = (restaurants) => ({
    type: 'ADD_RESTAURANTS',
    payload: restaurants,
  });

  export const addSingleRestaurant = (restaurants) => ({
    type: 'ADD_SINGLE_RESTAURANT',
    payload: restaurants,
  });

  export const setRestaurantData = (restaurants) => ({
    type: 'ADD',
    payload: restaurants,
  });
  
export const clearAllRestaurant = () => ({
    type: 'CLEAR',
});

