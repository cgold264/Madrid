import React, { useState, useEffect } from 'react';
import Container from '@mui/material/Container';
import 'bootstrap/dist/css/bootstrap.css';
import Popup from 'reactjs-popup';
import Button from 'react-bootstrap/Button';
import Leaders from '../Leaders/Leaders';
import RestaurantList from '../RestaurantList/RestaurantList';
import RestaurantTable from '../InformationTable/InformationTable';
import {allRestaurants, addRestaurant} from '../../services/tableDataService';
import 'reactjs-popup/dist/index.css';
import 'bootstrap/dist/css/bootstrap.css';

function Hero() {
    useEffect(() => {
        allRestaurants().then(data => {
          setRestaurantData(data)
        })
       }, []);

    const[restaurantPopup, setRestaurantPopup] = useState(false)
    const[restaurantInput, setRestaurantInput] = useState()
   const [restaurantData, setRestaurantData] = useState();


    return <>
        {restaurantPopup ? 
         <Popup open={restaurantPopup} position="center" onClose={() => {setRestaurantPopup(false)}}>
         <div className="row text-center">
             <button className="close" onClick={() => {setRestaurantPopup(false)}}>          &times;        </button>
             <div>Submit a new Restaurant</div>
             <div class="input-group input-group-sm mb-3">
                 <div class="input-group-prepend">
                     <span class="input-group-text" id="inputGroup-sizing-sm">Name</span>
                 </div>
                 <input 
                 type="text" 
                 class="form-control" 
                 aria-label="Small" 
                 aria-describedby="inputGroup-sizing-sm" 
                 onChange={(input) => {setRestaurantInput({...restaurantInput, name: input.target.value})}}></input>
             </div>
             <div class="input-group input-group-sm mb-3">
                 <div class="input-group-prepend">
                     <span class="input-group-text" id="inputGroup-sizing-sm">Item</span>
                 </div>
                 <input 
                 type="text" 
                 class="form-control" 
                 aria-label="Small" 
                 aria-describedby="inputGroup-sizing-sm"
                 onChange={(input) => {setRestaurantInput({...restaurantInput, item: input.target.value})}}></input>
             </div>
             <div class="input-group input-group-sm mb-3">
                 <div class="input-group-prepend">
                     <span class="input-group-text" id="inputGroup-sizing-sm">Cost</span>
                 </div>
                 <input 
                 type="number" 
                 class="form-control" 
                 aria-label="Small" 
                 aria-describedby="inputGroup-sizing-sm"
                 onChange={input => setRestaurantInput({...restaurantInput, price: input.target.value})}></input>
             </div>
             <div className="col-12">
                 <button 
                 className="btn btn-primary" 
                 onClick={() => {
                        setRestaurantPopup(false); 
                        addRestaurant(restaurantInput); 
                        setRestaurantData([...restaurantData, restaurantInput])
                    }}>Save</button>
             </div>
         </div>
         </Popup> 
         : null}
        <div className="background p-4 bg-dark">
            <Container disableGutters maxWidth="sm" component="main" sx={{ pt: 8, pb: 6 }}>
                <div className='text-light text-center'>
                    <h1>
                        Pricing
                    </h1>
                </div>
                <div className='text-light text-center font-weight-lighter'>
                    <h5>
                        Navigate the streets of madrid without the burden of finding the best and cheapest 
                        eats in the city.
                    </h5>
                </div>
                <div className="text-center m-3">
                    <Button variant="outline-primary" onClick={() => {setRestaurantPopup(true)}}>Submit a New Restaurant</Button>
                </div>
                <Leaders restaurants={restaurantData}/>
            </Container>
        </div>
        <RestaurantList items={restaurantData?.slice(2, 8)}/>
        <RestaurantTable rows={["Name", "Item", "Price"]} data={restaurantData?.slice(8, restaurantData.length)}/>
  </>
}

export default Hero;