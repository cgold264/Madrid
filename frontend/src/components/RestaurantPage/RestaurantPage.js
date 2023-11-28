import React, { useEffect } from 'react';
import Container from '@mui/material/Container';
import 'bootstrap/dist/css/bootstrap.css';
import Button from 'react-bootstrap/Button';
import Leaders from '../Leaders/Leaders';
import RestaurantList from '../RestaurantList/RestaurantList';
import RestaurantTable from '../InformationTable/InformationTable';
import {allEstablishments, allRestaurants} from '../../services/tableDataService';
import { useSelector, useDispatch } from 'react-redux';
import {trueRestaurantPopup} from '../../actions/restaurantActions';
import 'reactjs-popup/dist/index.css';
import 'bootstrap/dist/css/bootstrap.css';
import RestaurantPopup from '../RestaurantPopup/RestaurantPopup';
import { TypeAnimation } from 'react-type-animation';


function Hero() {

     const {restaurantList} = useSelector((state) => state.dataLists)
     const {inputRestaurant} = useSelector((state) => state.popups)

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(allEstablishments())
       }, [dispatch]);

    return <>
        {inputRestaurant ? 
            <RestaurantPopup />
         : null}
        <div className="background p-4 bg-dark">
            <Container disableGutters maxWidth="lg" component="main" sx={{ pt: 8, pb: 6 }}>
                <div className="m-4">
                    <div className='text-light text-center'>
                    <TypeAnimation
                        sequence={[
                            // Same substring at the start will only be typed out once, initially
                            'Great Food, Low Cost',
                            3000, // wait 1s before replacing "Mice" with "Hamsters"
                            "Madrid's Best Deals",
                            3000,
                            'Fine Dining, Low Prices',
                            3000,
                        ]}
                        wrapper="span"
                        speed={20}
                        style={{ fontSize: '2em', display: 'inline-block' }}
                        repeat={Infinity}
                        />
                    </div>
                    <div className='text-light text-center font-weight-lighter'>
                        <h5>
                        Discover Madrid's Hidden Gems: Your Guide to the Most Affordable Restaurants in the City.
                        </h5>
                    </div>
                </div>
                <div className="text-center mb-5">
                        <Button variant="outline-warning" onClick={() => {
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