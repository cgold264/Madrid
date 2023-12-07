import React, { useEffect } from 'react';
import Container from '@mui/material/Container';
import 'bootstrap/dist/css/bootstrap.css';
import Button from 'react-bootstrap/Button';
import Leaders from '../Leaders/Leaders';
import RestaurantList from '../ItemList/ItemList';
import RestaurantTable from '../InformationTable/InformationTable';
import {allRestaurants} from '../../services/tableDataService';
import { useSelector, useDispatch } from 'react-redux';
import {trueRestaurantPopup} from '../../actions/restaurantActions';
import 'reactjs-popup/dist/index.css';
import 'bootstrap/dist/css/bootstrap.css';
import { TypeAnimation } from 'react-type-animation';
import { trueLoginPopup } from '../../actions/userActions';



function RestaurantPage() {

     const {restaurantList} = useSelector((state) => state.dataLists)
     const {userName} = useSelector((state) => state.user)


    const dispatch = useDispatch();

       useEffect(() => {
        dispatch(allRestaurants())
       }, [dispatch]);

    return (
      <>
        <div className="restaurants-background p-4 bg-dark">
          <Container
            disableGutters
            maxWidth="lg"
            component="main"
            sx={{ pt: 8, pb: 6 }}
          >
            <div>
              <div className="text-light text-center">
                <TypeAnimation sequence=
                {[
                  // Same substring at the start will only be typed out once, initially
                  'Great food, Great prices',
                  3000, // wait 1s before replacing "Mice" with "Hamsters"
                  "Madrid's Best Deals",
                  3000,
                  'Fine Dining, Low Prices',
                  3000,
                ]}
                wrapper="span" speed={20}
                style=
                {{
                  fontSize: '3em',
                  display: 'inline-block',
                  fontWeight: 'bold',
                }}
                repeat={Infinity}
                />
              </div>
            </div>

            <div className="row mt-5 overflow-hidden">
              <Leaders restaurants={restaurantList} />
            </div>
            <div className="text-center mt-5">
              <Button
                variant="warning"
                onClick={() => {
                  if (userName) {
                    dispatch(trueRestaurantPopup());
                  } else {
                    dispatch(trueLoginPopup());
                  }
                }}
              >
                Submit a New Restaurant
              </Button>
            </div>
          </Container>
        </div>
        <RestaurantList items={restaurantList} />
        <RestaurantTable
          rows={['Name', 'Item', 'Submitter']}
          data={restaurantList}
        />
      </>
    );
}

export default RestaurantPage;