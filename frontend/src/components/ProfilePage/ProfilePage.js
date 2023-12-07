import React, { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { useSelector, useDispatch } from 'react-redux';
import InformationTable from '../InformationTable/InformationTable';
import { allEstablishmentsUser } from '../../services/tableDataService';
import 'reactjs-popup/dist/index.css';
import 'bootstrap/dist/css/bootstrap.css';

function RestaurantPage() {

    const {userEstablishmentList} = useSelector((state) => state.dataLists)


    const dispatch = useDispatch();

    useEffect(() => {
      dispatch(allEstablishmentsUser());
    }, [dispatch]);

  return (
    <>
      <InformationTable
        rows={['Name', 'Item', 'Submitter']}
        data={userEstablishmentList}
      />
    </>
  );
}

export default RestaurantPage;
