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
    const[restaurantData, setRestaurantData] = useState();

    return <>
        {restaurantPopup ? 
         <Popup 
            open={restaurantPopup} 
            position="center" 
            onClose={() => {setRestaurantPopup(false)}}>
         <div className="px-3">
             <button className="close" onClick={() => {setRestaurantPopup(false)}}>&times;</button>
             <h3 className="text-center">Submit a New Restaurant</h3>
             <form>
                <label for="restaurantNameInput" className="text-right">Restaurant Name</label>
                <div class="input-group mb-3">
                    <input 
                        type="text" 
                        className={`form-control ${restaurantInput?.name ? `is-valid` : `is-invalid`}`} 
                        id="restaurantNameInput" 
                        placeholder="Name" 
                        onChange={(input) => {
                            setRestaurantInput({...restaurantInput, name: input.target.value})
                        }}
                        required></input>
                    <div class="invalid-feedback">
                        Please input Restaurant Name.
                    </div>
                </div>
                <label for="restaurantItemInput">Item</label>
                <div class="input-group mb-3">
                    <input 
                    type="text" 
                    id="restaurantItemInput"
                    placeholder='Item'
                    className={`form-control ${restaurantInput?.item ? `is-valid` : `is-invalid`}`} 
                    onChange={(input) => {
                        setRestaurantInput({...restaurantInput, item: input.target.value})
                    }}
                    required></input>
                    <div class="invalid-feedback">
                        Please input item.
                    </div>
                </div>
                <label for="restaurantCostInput">Cost</label>
                <div class="input-group mb-3">
                    <input 
                    type="number" 
                    id="restaurantCostInput"
                    placeholder='Cost'
                    className={`form-control ${restaurantInput?.price ? `is-valid` : `is-invalid`}`}
                    onChange={(input) => {
                        setRestaurantInput({...restaurantInput, price: input.target.value})
                    }}
                    required></input>
                    <div class="invalid-feedback">
                        Please input item cost.
                    </div>
                </div>
                <div className="form-group">
                    <label for="restaurantDescription" >Description</label>
                    <textarea className="form-control" id="restaurantDescription" rows="3" 
                    onChange={input => setRestaurantInput({...restaurantInput, description: input.target.value})}></textarea>
                </div>
                <div className="col-12 my-3">
                    <button 
                    className="btn btn-primary" 
                    type="submit"
                    onClick={() => {
                            setRestaurantPopup(false); 
                            if (navigator.geolocation) {
                                navigator.geolocation.getCurrentPosition((position) => {
                                    setRestaurantInput({...restaurantInput, latitude: position.coords.latitude, longitude: position.coords.longitude})
                                    console.log(restaurantInput)
                                });
                            } else { 
                                console.log("Geolocation is not supported by this browser.");
                            }
                            addRestaurant(restaurantInput); 
                            setRestaurantData([...restaurantData, restaurantInput])
                        }}>Save</button>
                </div>
            </form>
         </div>
         </Popup> 
         : null}
        <div className="background p-4 bg-dark">
            <Container disableGutters maxWidth="lg" component="main" sx={{ pt: 8, pb: 6 }}>
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
                <div className="text-center mb-5">
                        <Button variant="outline-primary" onClick={() => {setRestaurantPopup(true)}}>Submit a New Restaurant</Button>
                </div>
                <div className="row mt-5 overflow-hidden">
                    <Leaders restaurants={restaurantData}/>
                </div>
            </Container>
        </div>
        <RestaurantList items={restaurantData?.slice(2, 8)}/>
        <RestaurantTable rows={["Name", "Item", "Price"]} data={restaurantData?.slice(8, restaurantData.length)}/>
  </>
}

export default Hero;