import {
fetchBars,
fetchRestaurants,
addNewRestaurant
} from './service';
import { addAllRestaurants } from '../actions/restaurantActions';


export async function allBars(){
    try{
        const data = await fetchBars();
        console.log("table service", data)
        return data;
    } catch (error) {
        console.error('Error:', error);
    }
}

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