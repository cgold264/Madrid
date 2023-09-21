import {
fetchBars,
fetchRestaurants,
addNewRestaurant
} from './service';

export async function allBars(){
    try{
        const data = await fetchBars();
        console.log("table service", data)
        return data;
    } catch (error) {
        console.error('Error:', error);
    }
}

export async function allRestaurants(){
    try{
        const data = await fetchRestaurants();
        console.log("table service", data)
        return data;
    } catch (error) {
        console.error('Error:', error);
    }
}

export async function addRestaurant(payload){
    try{
        await addNewRestaurant(payload);
        console.log("add Restaurant service")
    } catch (error) {
        console.error('Error:', error);
    }
}