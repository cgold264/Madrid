import {
fetchBars,
fetchRestaurants,
addNewRestaurant,
fetchEstablishment
} from './service';
import { addAllRestaurants } from '../actions/restaurantActions';
import { addAllBars } from '../actions/barActions';
import { addAllEstablishments } from '../actions/establishmentActions';

export const allBars = () => async (dispatch) => {
  try {
    const data = await fetchBars();
    console.log("table service", data);
    dispatch(addAllBars(data));
  } catch (error) {
    console.error('Error:', error);
  }
};

export const allEstablishments = () => async (dispatch) => {
    try {
      const data = await fetchEstablishment();
      console.log("table service", data);
      dispatch(addAllEstablishments(data));
    } catch (error) {
      console.error('Error:', error);
    }
  };

export const allRestaurants = () => async (dispatch) => {
    try {
      const data = await fetchRestaurants();
      console.log("table service", data);
      dispatch(addAllRestaurants(data));
    } catch (error) {
      console.error('Error:', error);
    }
  };

export async function addRestaurant(payload){
    try{
        await addNewRestaurant(payload);
        console.log("add Restaurant service")
    } catch (error) {
        console.error('Error:', error);
    }
}