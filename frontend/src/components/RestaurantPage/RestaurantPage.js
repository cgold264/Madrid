import React, { useState, useEffect } from 'react';
import Container from '@mui/material/Container';
import 'bootstrap/dist/css/bootstrap.css';
import Button from 'react-bootstrap/Button';
import Leaders from '../Leaders/Leaders';
import RestaurantList from '../RestaurantList/RestaurantList';
import RestaurantTable from '../InformationTable/InformationTable';
import {allRestaurants} from '../../services/tableDataService';
import { useSelector, useDispatch } from 'react-redux';
import {trueRestaurantPopup} from '../../actions/restaurantActions';
import 'reactjs-popup/dist/index.css';
import 'bootstrap/dist/css/bootstrap.css';
import RestaurantPopup from '../RestaurantPopup/RestaurantPopup';


function Hero() {

     const {restaurantList} = useSelector((state) => state.dataLists)
     const {inputRestaurant} = useSelector((state) => state.popups)

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(allRestaurants())
       }, [dispatch]);

    return <>
        {inputRestaurant ? 
            <RestaurantPopup />
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
                        <Button variant="outline-primary" onClick={() => {
                            dispatch(trueRestaurantPopup())
                            }}>
                                Submit a New Restaurant
                        </Button>
                </div>
                <div className="row mt-5 overflow-hidden">
                    <Leaders restaurants={restaurantList}/>
                </div>
            </Container>
        </div>
        <RestaurantList items={restaurantList?.slice(2, 8)}/>
        <RestaurantTable rows={["Name", "Item", "Price"]} data={restaurantList?.slice(8, restaurantList.length)}/>
  </>
}

export default Hero;