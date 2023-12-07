import React, { useEffect } from 'react';
import Container from '@mui/material/Container';
import 'bootstrap/dist/css/bootstrap.css';
import Button from 'react-bootstrap/Button';
import Leaders from '../Leaders/Leaders';
import RestaurantList from '../ItemList/ItemList';
import InformationTable from '../InformationTable/InformationTable';
import { allExcursions } from '../../services/tableDataService';
import { useSelector, useDispatch } from 'react-redux';
import { trueRestaurantPopup } from '../../actions/restaurantActions';
import { trueLoginPopup } from '../../actions/userActions';
import { TypeAnimation } from 'react-type-animation';
import 'reactjs-popup/dist/index.css';
import 'bootstrap/dist/css/bootstrap.css';

function BarPage() {
    const { userName } = useSelector((state) => state.user);
  const { excursionsList } = useSelector((state) => state.dataLists);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(allExcursions());
  }, [dispatch]);

  return (
    <>
      <div className="excursions-background p-4 bg-dark">
        <Container
          disableGutters
          maxWidth="lg"
          component="main"
          sx={{ pt: 8, pb: 6 }}
        >
          <div className="m-4 mb-1">
            <div className="text-light text-center">
              <TypeAnimation
                sequence={[
                  // Same substring at the start will only be typed out once, initially
                  'Activities on a Budget',
                  3000, // wait 1s before replacing "Mice" with "Hamsters"
                  "Madrid's Best Deals",
                  3000,
                  'Fine Dining, Low Prices',
                  3000,
                ]}
                wrapper="span"
                speed={20}
                style={{ fontSize: '3em', display: 'inline-block', fontWeight: "bold" }}
                repeat={Infinity}
              />
            </div>
          </div>
          <div className="row mt-5 overflow-hidden">
            <Leaders restaurants={excursionsList} />
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
      <RestaurantList items={excursionsList} />
      <InformationTable
        rows={['Name', 'Drink', 'Submitter']}
        data={excursionsList}
      />
    </>
  );
}

export default BarPage;
