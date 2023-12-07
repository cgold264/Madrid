import React, { useEffect } from 'react';
import Container from '@mui/material/Container';
import 'bootstrap/dist/css/bootstrap.css';
import Button from 'react-bootstrap/Button';
import Leaders from '../Leaders/Leaders';
import RestaurantList from '../ItemList/ItemList';
import InformationTable from '../InformationTable/InformationTable';
import {allBars} from '../../services/tableDataService';
import { useSelector, useDispatch } from 'react-redux';
import {trueRestaurantPopup} from '../../actions/restaurantActions';
import { trueLoginPopup } from '../../actions/userActions';
import 'reactjs-popup/dist/index.css';
import 'bootstrap/dist/css/bootstrap.css';


function BarPage() {

     const {barsList} = useSelector((state) => state.dataLists)
     const { userName } = useSelector((state) => state.user);

    const dispatch = useDispatch();

       useEffect(() => {
        dispatch(allBars())
       }, [dispatch]);

    return (
      <>
        <div className="bars-background p-4 bg-dark">
          <Container
            disableGutters
            maxWidth="lg"
            component="main"
            sx={{ pt: 8, pb: 6 }}
          >
            <div className="m-4">
              <div className="text-light text-center">
                <h1 className="text-white">
                  <b>Top Picks</b>
                </h1>
              </div>
            </div>
            <div className="row mt-5 overflow-hidden">
              <Leaders restaurants={barsList} />
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
                Submit a New Excursion
              </Button>
            </div>
          </Container>
        </div>
        <RestaurantList items={barsList} />
        <InformationTable
          rows={['Name', 'Drink', 'Submitter']}
          data={barsList}
        />
      </>
    );
}

export default BarPage;