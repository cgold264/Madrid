import React, { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import InformationTable from '../InformationTable/InformationTable';
import { allRestaurants } from '../../services/tableDataService';
import { useDispatch } from 'react-redux';
import 'reactjs-popup/dist/index.css';
import 'bootstrap/dist/css/bootstrap.css';

function RestaurantPage() {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(allRestaurants());
  }, [dispatch]);

  return (
    <>
      <InformationTable
        rows={['Name', 'Item', 'Submitter']}
        data={[]}
      />
    </>
  );
}

export default RestaurantPage;
