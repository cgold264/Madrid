import {fetchBars} from './service';

export async function allBars(){
    try{
        const data = await fetchBars();
        console.log("table service", data)
        return data;
    } catch (error) {
        console.error('Error:', error);
    }
}